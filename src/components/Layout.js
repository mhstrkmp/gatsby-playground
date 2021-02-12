import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Header from "./Header";
import Footer from "./Footer";

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: repeat(12, 1fr);
  height: 100%;
  header,
  footer {
    grid-column: span 12;
  }
`;

const ContentWrapper = styled.main`
  grid-column: 2 / 12;
  max-width: 1000px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <PageWrapper>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
