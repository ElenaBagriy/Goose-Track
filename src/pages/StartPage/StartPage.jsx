import { StartPageHero } from 'components/StartPageComponents/StartPageHero/StartPageHero';
import { StartPageMain } from 'components/StartPageComponents/StartPageMain/StartPageMain';
import { StartPageReviews } from 'components/StartPageComponents/StartPageReviews/StartPageReviews';
import React from 'react';

const StartPage = () => {
    return <>
        <StartPageHero />
        <StartPageMain />
        <StartPageReviews/>
    </>;
};

export default StartPage;