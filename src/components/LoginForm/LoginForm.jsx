import { ErrorMessage, Formik } from 'formik';
import { SubmitButton, Error, Label, StyledField, StyledForm, Title, VisibilityBtn, SVG } from './LoginForm.styled';
import { LoginSchema } from 'shared/services/validation';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/userAuth/userAuthOperations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import sprite from '../../images/svg/sprite.svg';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [passwordType, setPasswordType] = useState('password');

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

    return <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validationSchema={LoginSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
            dispatch(userLogin(values))
            .unwrap()
            .then((res) =>{
                    toast.success('You have logged in successfully');
                    actions.resetForm();
                    navigate('/calendar/month');
                })
            .catch((error) => {
                toast.error(error);
            });

        }}
        >
            {({ errors, touched, values }) => (
                <StyledForm>
                <Title>Log In</Title>
                <div>
                <Label error={errors.email} touched={touched.email}>
                    Email
                    <StyledField name="email" type="email" placeholder="Enter email" value={values.email} error={errors.email} touched={touched.email}/>
                    {!touched.email ? null : 
                    (errors.email && touched.email ? <SVG height="24" width="24">
                        <use href={sprite + '#error'}></use>
                    </SVG> : 
                    <SVG height="24" width="24">
                        <use href={sprite + '#success'}></use>
                    </SVG>)}
                <ErrorMessage name="email" >{msg => <Error>{msg}</Error>}</ErrorMessage>
                </Label>
                <Label error={errors.password} touched={touched.password}>
                    Password
                    <StyledField name="password" placeholder="Enter password" type={passwordType} value={values.password} error={errors.password} touched={touched.password}/>
                    <VisibilityBtn onClick={togglePassword} error={errors.password} touched={touched.password}>
                  {passwordType === 'password' ? (
                    <VisibilityOff/>
                  ) : (
                    <Visibility/>
                  )}
                </VisibilityBtn>
                <ErrorMessage name="password" >{msg => <Error>{msg}</Error>}</ErrorMessage>
                </Label>
                </div>
                <SubmitButton type="submit">
                    Log In
                    <svg height="18" width="18">
                        <use href={sprite + '#login'}></use>
                    </svg>
                </SubmitButton>
            </StyledForm>
            )}
        </Formik>
};