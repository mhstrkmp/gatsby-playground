import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  ul {
    list-style-type: none;
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: space-around;
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
