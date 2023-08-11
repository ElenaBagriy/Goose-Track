import { useSelector } from "react-redux";
import { Name, NameWrapper, Form, Role, Label, FormWrapper, FieldsWrapper, StyledField, Button, UserAvatarWrapper, AvatarLabel, HiddenInput, AddButton } from "./UserForm.styled";
import { selectThemeIsLight, selectUser } from "redux/selectors";
import avatarLight from '../../images/avatarLight.png';
import avatarDark from '../../images/avatarDark.png';
import sprite from '../../images/svg/sprite.svg';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { formatDate } from "shared/services/formatDate";
import { StyledDatePicker } from "./DatePicker/DatePicker";

const startDate = new Date();

export const UserForm = () => {
    const isLightTheme = useSelector(selectThemeIsLight);
    const userData = useSelector(selectUser);
    const {name, phone, birthday, email, skype, image} = userData;
    const [userImage, setUserImage] = useState('');


    const { 
        register, 
        handleSubmit, 
        watch, 
        control, 
        setValue,
        formState: { errors, isDirty, dirtyFields } 
    } = useForm({
        values: {
            name,
            email,
            phone: !phone ? '' : phone,
            birthday: !birthday ? startDate : birthday,
            skype: !skype ? '' : skype,
            image
          },
      });

    const onSubmit = (data, e) => {
        console.log(data)
    };

    // useEffect(() => {
    //     if (name) setUserName(name);
    //     if (phone) setUserPhone(phone);
    //     if (skype) setUserSkype(skype);
    //     if (email) setUserEmail(email);
        // if (birthday) setUserBirthday(birthday);

    // }, [name, phone, skype, email, birthday])
    

    return   <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
        <UserAvatarWrapper>
            <AvatarLabel>
                <img src={isLightTheme ? avatarLight : avatarDark} alt="avatar"/>
                <HiddenInput 
                    name="image" 
                    type="file"
                    accept="image/*"
                />
                <AddButton type="button">
                    <svg width={18} height={18}>
                        <use href={sprite + '#plus'}></use>
                    </svg>
                </AddButton>
            </AvatarLabel>
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
                </Label>
                <Label>
                    Phone
                    <StyledField 
                    {...register('phone')}
                    type='tel'
                    placeholder="Enter phone" 
                    />
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
                </Label>
                <Label >
                    Email
                    <StyledField 
                    {...register('email')}
                    placeholder="Enter email" 
                    type="email" />
                </Label>
                </FieldsWrapper>
                <Button type="submit">
                    Save changes
                </Button>
            </FormWrapper>
        </Form>
}