// import { useSelector } from 'react-redux';
// import { selectThemeIsLight } from 'redux/theme/themeSelectors';
import { ThemeProvider } from 'styled-components';

const setTheme = isLight => {
  return {
    colors: {
      mainBlue: `#3E85F3`,
      lightBlue: `#DCEBF7`,
      white: '#ffffff',
      black: '#171820',
      // error: '#DA1414',
      error: '#E74A3B',
      success: '#3CBC81',


    },

    button: {
      hover: `#2B78EF`,
      
      text: `${isLight ? '#fafafa' : '#8BAA36'}`,
    },

    hover: {
      transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow:
        '1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.12)',
    },
    sizes: {
      mobile: '@media screen and (min-width:374.98px)',
      tablet: '@media screen and (min-width:767.98px)',
      desktop: '@media screen and (min-width:1279.98px)',
    },
  };
};

export const Theme = ({ children }) => {
  // const isLightTheme = useSelector(selectThemeIsLight);
  const isLightTheme = true;

  return (
    <ThemeProvider theme={setTheme(isLightTheme)}>{children}</ThemeProvider>
  );
};
