import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { AuthNavigate } from 'shared/services/reusableComponents/AuthNavigate/AuthNavigate';
import { FormWrapper, Goose, ImageWrapper, Section, SpeechBubble, Text } from './LoginPage.styled';
import TypeIt from 'typeit-react';
import sprite from '../../images/svg/sprite.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

const LoginPage = () => {
    const matches = useMediaQuery('(min-width: 1400px)');

    return <Section>
        {matches &&
        <ImageWrapper>
            <Goose>
            </Goose>
            <SpeechBubble>
                <svg xmlns="http://www.w3.org/2000/svg" width="181" height="130" viewBox="0 0 181 130" fill="none">
                    <use href={sprite + '#bubble-login'}></use>
                </svg>
                <Text>
                    <TypeIt
                    as='p'
                    getBeforeInit={(instance) => {
                        instance.pause(1050)
                        .type("Quickly come")
                        .pause(500)
                        .delete(4)
                        .pause(500)
                        .type(" <span class='accent'>come in</span> and write down your tasks for the day!")
                        return instance;
                    }}>
                    </TypeIt>
                </Text>
            </SpeechBubble>
        </ImageWrapper>
        }
        <FormWrapper>
        <LoginForm/>
        <AuthNavigate link='/register' text='Sign Up'/>
        </FormWrapper>
    </Section>;
};

export default LoginPage;