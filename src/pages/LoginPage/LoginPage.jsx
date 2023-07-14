import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { AuthNavigate } from 'shared/services/reusableComponents/AuthNavigate/AuthNavigate';

const LoginPage = () => {
    return <>
    <LoginForm/>
        <AuthNavigate/>
    </>;
};

export default LoginPage;