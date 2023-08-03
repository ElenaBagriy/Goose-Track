import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { AuthNavigate } from 'shared/services/reusableComponents/AuthNavigate/AuthNavigate';
import { FormWrapper, Goose, Section, SpeechBubble } from './RegisterPage.styled';

const RegisterPage = () => {
    return <Section>

        <Goose>
            <SpeechBubble></SpeechBubble>
        </Goose>

        <FormWrapper>
            <RegisterForm/>
            <AuthNavigate link='/login' text='Log In'/>
        </FormWrapper>
    </Section>;
};

export default RegisterPage;