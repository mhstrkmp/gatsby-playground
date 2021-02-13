import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  margin: 0.5rem 1.25rem 0 1.25rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr repeat(3, auto);
    justify-items: start;
    align-items: center;
    list-style-type: none;
    text-transform: lowercase;
    li:not(:first-child) {
      font-size: var(--smallFontSize);
    }
    li:not(:last-child) {
      padding-right: 1.953rem;
    }
  }
`;

const Header = () => {
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
      <nav>
        <ul>
          {data.site.siteMetadata.menuLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
