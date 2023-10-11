import { useDispatch, useSelector } from "react-redux";
import { Name, NameWrapper, Form, Role, Label, FormWrapper, FieldsWrapper, StyledField, Button, UserAvatarWrapper, Error } from "./UserForm.styled";
import { selectUser } from "redux/selectors";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { formatDate } from "shared/services/formatDate";
import { StyledDatePicker } from "./DatePicker/DatePicker";
import { userUpdate } from "redux/userAuth/userAuthOperations";
import { userFormSchema } from "shared/services/validation";
import { toast } from "react-toastify";
import { UserAvatar } from "./UserAvatar/UserAvatar";

const startDate = new Date();

export const UserForm = () => {
    const userData = useSelector(selectUser);
    const {name, phone, birthday, email, skype, image} = userData;
    const [isDisabled, setIsDisabled] = useState(true);
    const [userImage, setUserImage] = useState(image);
    const dispatch = useDispatch();

    const input = useRef();

    const { 
        register, 
        handleSubmit, 
        control, 
        setValue,
        formState: { errors, isDirty } 
    } = useForm({
        resolver: yupResolver(userFormSchema),
        values: {
            name,
            email,
            phone: !phone ? '' : phone,
            birthday: !birthday ? startDate : new Date(birthday),
            skype: !skype ? '' : skype,
            image
          },
      });


    const onSubmit = (data, e) => {
        if(data.birthday === startDate) {
            setValue('birthday', null)
        };
        
        const preparedUserImgUrl = data.image === '' ? '' : userImage;
        const preparedName = data.name.trim();
        const preparedPhone = data.phone === '' ? null : data.phone.trim();
        const preparedBirthday =
        formatDate(data.birthday) === formatDate(startDate)
        ? null
        : formatDate(data.birthday);
        const preparedSkype = data.skype === '' ? null : data.skype.trim();
        const preparedEmail = data.email.trim();
        const preparedData = {
            // ...data,
            name: preparedName,
            email: preparedEmail,
            phone: preparedPhone,
            skype: preparedSkype,
            birthday: preparedBirthday,
            userImgUrl: preparedUserImgUrl,
        };

        console.log(preparedData);
        dispatch(userUpdate(preparedData))
        .unwrap()
        .then((res) =>{
            toast.success('Your changes have been saved successfully!');
            setIsDisabled(true);
        })
        .catch((error) => {
            toast.error(`Something went wrong. Please, try again. (${error})`);
        });
    };

    useEffect(() => {
        if (isDirty) {
            setIsDisabled(false)
        }
    }, [isDirty]);

    useEffect(() => {
        if (image) {
            setUserImage(image)
        }
    }, [image])
    

    // console.log(errors);

    return   <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
        <UserAvatarWrapper>
            <UserAvatar error={errors.image} setIsDisabled={setIsDisabled} register={register} ref={input}
            userImage={userImage} setUserImage={setUserImage}/>
            <NameWrapper>
                <Name>Name</Name>
                <Role>User</Role>
            </NameWrapper>
        </UserAvatarWrapper>
    
        
        <FormWrapper>
            <FieldsWrapper>
                <Label>
                    User Name
                    <StyledField 
                    {...register('name')}
                      type='text'
                      placeholder= 'Enter your name'/>
                      {errors.name && <Error role="alert">{errors.name?.message}</Error>}
                </Label>
                <Label>
                    Phone
                    <StyledField 
                    {...register('phone')}
                    type='tel'
                    placeholder="Enter phone" 
                    />
                    {errors.phone && <Error role="alert">{errors.phone?.message}</Error>}
                </Label>
                
                <StyledDatePicker control={control}>
                    Birthday
                 </StyledDatePicker>


                <Label>
                    Skype
                    <StyledField 
                    {...register('skype')}
                    type='tel'
                    placeholder="Add a skype number" />
                    {errors.skype && <Error role="alert">{errors.skype?.message}</Error>}
                </Label>
                <Label >
                    Email
                    <StyledField 
                    {...register('email')}
                    placeholder="Enter email" 
                    // type="email" 
                    />
                    {errors.email && <Error role="alert">{errors.email?.message}</Error>}
                </Label>
                </FieldsWrapper>
                <Button type="submit" disabled={isDisabled}>
                    Save changes
                </Button>
            </FormWrapper>
        </Form>
}