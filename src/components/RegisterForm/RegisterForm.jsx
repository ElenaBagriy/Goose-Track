import { ErrorMessage, Formik } from 'formik';
import { SubmitButton, Error, Label, StyledField, StyledForm, Title, VisibilityBtn, SVG } from './RegisterForm.styled';
import { SignupSchema } from 'shared/services/validation';
import { useDispatch } from 'react-redux';
import { userRegister } from 'redux/userAuth/userAuthOperations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import sprite from '../../images/svg/sprite.svg';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const RegisterForm = () => {
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
            name: '',
            email: '',
            password: '',
        }}
        validationSchema={SignupSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
            dispatch(userRegister(values))
            .unwrap()
            .then((res) =>{
                    toast.success('Thank you for registering! Your account has been created successfully.');
                    actions.resetForm();
                    navigate('/calendar');
                })
            .catch((error) => {
                toast.error(error);
            });

        }}
        >
            {({ errors, touched, values }) => {
                return (<StyledForm>
                <Title>Sign Up</Title>
                <div>
                <Label error={errors.name} touched={touched.name?.toString()}>
                    Name
                    <StyledField name="name" placeholder="Enter your name" value={values.name} error={errors.name} touched={touched.name?.toString()}/>
                    {!touched.name ? null : 
                    (errors.name && touched.name ? <SVG height="24" width="24">
                        <use href={sprite + '#error'}></use>
                    </SVG> : 
                    <SVG height="24" width="24">
                        <use href={sprite + '#success'}></use>
                    </SVG>)}
                <ErrorMessage name="name" >{msg => <Error>{msg}</Error>}</ErrorMessage>
                </Label>
                <Label error={errors.email} touched={touched.email?.toString()}>
                    Email
                    <StyledField name="email" type="email" placeholder="Enter email" value={values.email} error={errors.email} touched={touched.email?.toString()}/>
                    {!touched.email ? null : 
                    (errors.email && touched.email ? <SVG height="24" width="24">
                        <use href={sprite + '#error'}></use>
                    </SVG> : 
                    <SVG height="24" width="24">
                        <use href={sprite + '#success'}></use>
                    </SVG>)}
                <ErrorMessage name="email" >{msg => <Error>{msg}</Error>}</ErrorMessage>
                </Label>
                <Label error={errors.password} touched={touched.password?.toString()}>
                    Password
                    <StyledField name="password" placeholder="Enter password" value={values.password} type={passwordType} error={errors.password} touched={touched.password?.toString()}/>
                    <VisibilityBtn onClick={togglePassword} error={errors.password} touched={touched.password?.toString()}>
                  {passwordType === 'password' ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </VisibilityBtn>
                <ErrorMessage name="password" >{msg => <Error>{msg}</Error>}</ErrorMessage>
                </Label>
                </div>
                <SubmitButton type="submit">
                    Sign Up
                    <svg height="18" width="18">
                        <use href={sprite + '#login'}></use>
                    </svg>
                </SubmitButton>
            </StyledForm>)
            }}
        </Formik>
};