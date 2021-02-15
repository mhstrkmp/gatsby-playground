import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const BlogPost = styled.article`
  // Styling
`;

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <BlogPost>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogPost>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

BlogTemplate.propTypes = {
  data: PropTypes.object,
};
