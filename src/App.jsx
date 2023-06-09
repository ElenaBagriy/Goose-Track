import { GlobalStyle } from 'styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Theme } from 'styles/Theme';
import StartPage from 'pages/StartPage/StartPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

// const StartPage = lazy(() => import('pages/StartPage/StartPage'));
// const LoginPage = lazy(() => import('pages/StartPage/StartPage'));
// const RegisterPage = lazy(() => import('pages/StartPage/StartPage'));


export const App = () => {
  return (
    <>
      <Theme>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<StartPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </Theme>
    </>
  );
};
