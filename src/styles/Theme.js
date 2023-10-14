import { useSelector } from 'react-redux';
import { selectThemeIsLight } from 'redux/selectors';
import { ThemeProvider } from 'styled-components';



const setTheme = isLight => {
  return {
    colors: {
      mainBlue: `#3E85F3`,
      lightBlue: `#DCEBF7`,
      white: '#ffffff',
      black: '#171820',
      error: '#E74A3B',
      success: '#3CBC81',
      background: `${isLight ? '#F7F6F9' : '#181921'}`,
      sidebar: `${isLight ? '#ffffff' : '#13151A'}`,
      activeLink: `${isLight ? '#E3F3FF' : '#3E85F3'}`,
      page: `${isLight ? '#ffffff' : '#21222C'}`,
      inputBorder: `${isLight ? 'rgba(17, 17, 17, 0.10)' : 'rgba(255, 255, 255, 0.15)'}`,
      avatarBg: `${isLight ? '#F8F8F8' : '#171820'}`,
    },

    tablet: {
      unactive: `${isLight ? '#E3F3FF' : '#21222C'}`,
      divider: `${isLight ? 'rgba(62, 133, 243, 0.20)' : 'rgba(255, 255, 255, 0.15)'}`,
    },

    text: {
      header: `${isLight ? '#343434' : '#ffffff'}`,
      logo: `${isLight ? '#3E85F3' : '#E3F3FF'}`,
      panel: `${isLight ? 'rgba(52, 52, 52, 0.50)' : 'rgba(250, 250, 250, 0.30)'}`,
      nav: `${isLight ? 'rgba(52, 52, 52, 0.50)' : '#ffffff'}`,
      activeLink: `${isLight ? '#3E85F3' : '#ffffff'}`,
      role: `${isLight ? '#343434' : 'rgba(250, 250, 250, 0.30)'}`,
      label: `${isLight ? '#111111' : 'rgba(250, 250, 250, 0.30)'}`,
      input: `${isLight ? '#111111' : '#ffffff'}`,
    },

    button: {
      hover: `#2B78EF`,
      boxShadow: `4px 2px 16px 0px rgba(136, 165, 191, 0.48)`,
      text: `${isLight ? '#fafafa' : '#8BAA36'}`,
      disabled: `${isLight ? 'rgba(0, 0, 0, 0.26)' : 'rgba(0, 0, 0, 0.12)'}`,
    },

    hover: {
      transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
      linkBg: `${isLight ? '#E3F3FF' : 'transparent'}`,
      linkText: `${isLight ? 'rgba(52, 52, 52, 0.50)' : '#3E85F3'}`,

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
  const isLightTheme = useSelector(selectThemeIsLight);

  return (
    <ThemeProvider theme={setTheme(isLightTheme)}>{children}</ThemeProvider>
  );
};
