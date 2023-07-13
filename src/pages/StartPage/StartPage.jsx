import { StartPageHero } from 'components/StartPageComponents/StartPageHero/StartPageHero';
import { StartPageMain } from 'components/StartPageComponents/StartPageMain/StartPageMain';
import { StartPageReviews } from 'components/StartPageComponents/StartPageReviews/StartPageReviews';
import React from 'react';
import { Container } from 'shared/services/reusableComponents/Container/Container';

const StartPage = () => {
    return <>
        <StartPageHero />
        <StartPageMain />
        <StartPageReviews/>
    </>;
};

export default StartPage;