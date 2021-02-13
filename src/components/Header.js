import { useStaticQuery, graphql, Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  margin: 0.5rem 1.25rem 0 1.25rem;
  text-transform: lowercase;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 20;

  div {
    width: 100%;
    height: 0.15rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    :first-child {
      transform: ${({ showNavLinks }) =>
        showNavLinks ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ showNavLinks }) => (showNavLinks ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ showNavLinks }) =>
        showNavLinks ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  li {
    padding-left: 1.5rem;
  }
  @media (max-width: 768px) {
    background: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    text-align: center;
    transition: transform 300ms;
    li {
      padding-top: 1.2rem;
    }
    transform: ${({ showNavLinks }) =>
      showNavLinks ? "translateX(0)" : "translateX(100%)"};
  }
`;

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);
  return (
    <StyledHeader>
      <Navigation>
        <Link to="/">&lt;mhstrkmp /&gt;</Link>
        <MenuIcon
          showNavLinks={showNavLinks}
          onClick={() => setShowNavLinks(!showNavLinks)}
        >
          <div />
          <div />
          <div />
        </MenuIcon>
        <NavLinks showNavLinks={showNavLinks}>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                onClick={() => setShowNavLinks(!showNavLinks)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </NavLinks>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
