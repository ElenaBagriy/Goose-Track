import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { AuthNavigate } from 'shared/services/reusableComponents/AuthNavigate/AuthNavigate';
import { FormWrapper, Section } from './LoginPage.styled';

const LoginPage = () => {
    return <Section>
        <FormWrapper>
        <LoginForm/>
        <AuthNavigate link='/register' text='Sign Up'/>
        </FormWrapper>
    </Section>;
};

export default LoginPage;