import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { AuthNavigate } from 'shared/services/reusableComponents/AuthNavigate/AuthNavigate';
import { FormWrapper, Goose, ImageWrapper, Section, SpeechBubble, Text } from './RegisterPage.styled';
import sprite from '../../images/svg/sprite.svg';
import TypeIt from "typeit-react";
import useMediaQuery from '@mui/material/useMediaQuery';


const RegisterPage = () => {
    const matches = useMediaQuery('(min-width: 1400px)');

    return <Section>
        {matches &&
        <ImageWrapper>
            <Goose>
            </Goose>
                <SpeechBubble>
                    <svg xmlns="http://www.w3.org/2000/svg" width="181" height="130" viewBox="0 0 181 130" fill="none">
                        <use href={sprite + '#bubble'}></use>
                    </svg>
                    <Text>
                        <TypeIt
                        as='p'
                        getBeforeInit={(instance) => {
                            instance.pause(1050)
                            .type("Quickly reg")
                            .pause(500)
                            .delete(3)
                            .pause(500)
                            .type(" <span class='accent'>register</span> and familiarize yourself with the application!")
                            return instance;
                         }}>
                        </TypeIt>
                    </Text>
                </SpeechBubble>
        </ImageWrapper>
        }
        
        <FormWrapper>
            <RegisterForm/>
            <AuthNavigate link='/login' text='Log In'/>
        </FormWrapper>
    </Section>;
};

export default RegisterPage;