import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      {children}
    </>
  );
};

export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
