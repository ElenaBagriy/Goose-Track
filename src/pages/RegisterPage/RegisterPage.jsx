import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { AuthNavigate } from 'shared/services/reusableComponents/AuthNavigate/AuthNavigate';
import { Section } from './RegisterPage.styled';

const RegisterPage = () => {
    return <Section>
        <RegisterForm/>
        <AuthNavigate/>
    </Section>;
};

export default RegisterPage;