import { GlobalStyle } from 'styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import StartPage from "pages/StartPage/StartPage";
import { Theme } from 'styles/Theme';

// const StartPage = lazy(() => import('pages/StartPage/StartPage'));

export const App = () => {
  return (
    <>
      <Theme>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<StartPage/>} />
      </Routes>
      </Theme>
    </>
  );
};
