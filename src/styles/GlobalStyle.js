import InterRegular from '../styles/fonts/Inter/Inter-Regular.ttf';
import InterMedium from '../styles/fonts/Inter/Inter-Medium.ttf';
import InterSemiBold from '../styles/fonts/Inter/Inter-SemiBold.ttf';
import InterBold from '../styles/fonts/Inter/Inter-Bold.ttf';
import { createGlobalStyle } from 'styled-components';
// import { modernNormalizeCss } from 'emotion-modern-normalize';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format("truetype");
    font-weight: 400;
    font-display: swap;
}
@font-face {
    font-family: 'Inter';
    src: url(${InterMedium}) format("truetype");
    font-weight: 500;
    font-display: swap;
}
@font-face {
    font-family: 'Inter';
    src: url(${InterSemiBold}) format("truetype");
    font-weight: 600;
    font-display: swap;
}
@font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format("truetype");
    font-weight: 700;
    font-display: swap;
} 
@font-face {
  font-family: 'Coolvetica';
  src: local('Coolvetica Regular'), local('Coolvetica-Regular'),
    url('../styles/fonts/Coolvetica/CoolveticaRg-Regular.woff2') format('woff2'),
    url('../styles/fonts/Coolvetica/CoolveticaRg-Regular.woff') format('woff'),
    url('../styles/fonts/Coolvetica/CoolveticaRg-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Coolvetica';
  src: local('Coolvetica Italic'), local('Coolvetica-Italic'),
    url('../styles/fonts/Coolvetica/CoolveticaRg-Italic.woff2') format('woff2'),
    url('../styles/fonts/Coolvetica/CoolveticaRg-Italic.woff') format('woff'),
    url('../styles/fonts/Coolvetica/CoolveticaRg-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}


body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: white; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: normal;
  box-sizing: border-box;
}

code {
  font-family: 'Inter', sans-serif;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin and padding */
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
a,
address,
code,
img,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  letter-spacing: normal;
}

/* Reset list styles */
ol,
ul {
  list-style: none;
}

/* Reset anchor styles */
a {
  color: inherit;
  text-decoration: none;
}

button {
  padding: 0;
  cursor: pointer;
  font: inherit;
}

/* Make images and embedded objects responsive */
img,
embed,
object,
video {
  max-width: 100%;
  height: auto;
  display: block;
}

input,
textarea,
select {
  font: inherit;
}

/* Reset table styles */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.loader-wrapper {
 display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  height: 100vh;
   margin-left: auto;
  margin-right: auto;
}
`;
