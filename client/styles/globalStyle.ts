import { createGlobalStyle } from "styled-components";

import { MenloRegular } from "../public/assets/fonts";

export default createGlobalStyle`
   @font-face {
     font-family: 'Menlo';
     src: local('Menlo'), local('Menlo'),
     url(${MenloRegular}) format('woff');
     font-weight: 300;
     font-style: normal;
   }

  html, body {
    margin: 0;
    background: ${({ theme }: { theme: any }) => theme.colors.main.background};
  }

  * > a {
    text-decoration: none;
    color: inherit;
  }
`;
