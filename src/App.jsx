import { GlobalStyle } from 'styles/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Theme } from 'styles/Theme';
import 'react-toastify/dist/ReactToastify.css';

const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const SharedLayout = lazy(() => import("./components/SharedLayout/SharedLayout"));
const MainLayout = lazy(() => import("./pages/MainLayout/MainLayout"));
const AccountPage = lazy(() => import("./pages/AccountPage/AccountPage"));
const CalendarPage = lazy(() => import("./pages/CalendarPage/CalendarPage"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage/StatisticsPage"));



export const App = () => {
  return (
    <>
      <Theme>
      <GlobalStyle />
      <Routes>
        <Route
        path="/"
        element={<SharedLayout/>}>
          <Route
          index
          element={<StartPage/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route element={<MainLayout />}>
            <Route path="account" element={<AccountPage />} />
            <Route path="calendar" element={<CalendarPage />}>
              {/* <Route path="month/:currentMonth" element={<ChosenMonth />} />
              <Route path="day/:currentDay" element={<ChosenDay />} /> */}
            </Route>
            <Route path="statistics" element={<StatisticsPage />} />
          </Route>
        </Route>
      </Routes>
      
      </Theme>
    </>
  );
};
