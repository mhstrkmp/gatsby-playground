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
  height: 100vh;
`;

const MainSection = styled.section`
  // Styling
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <PageWrapper>
        <Header />
        <MainSection>{children}</MainSection>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
