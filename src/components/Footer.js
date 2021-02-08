import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  font-size: var(--smallFontSize);
  padding: 1.5rem 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/mhstrkmp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Crafted with ♥ by Matthias Heisterkamp
      </a>
    </StyledFooter>
  );
};

export default Footer;
