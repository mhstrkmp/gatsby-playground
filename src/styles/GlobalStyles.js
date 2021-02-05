import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}

:root {
  /* Colors */
}

html {
  font-size: 18px;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyles;
