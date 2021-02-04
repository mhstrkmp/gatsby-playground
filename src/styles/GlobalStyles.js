import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}

:root {
}

html {
  scroll-behavior: smooth;
}

body
 {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
`;

export default GlobalStyles;
