import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}

:root {
  /* Colors */
  --background-light: white;
  --background: var(--background-light);
}

html {
  font-size: 18px;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyles;
