import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const BlogPosts = styled.article`
  // Styling
`;

const BlogPostPreview = styled.aside`
  margin: 3rem 0;
  h1,
  h2 {
    margin: 0;
  }
`;

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);
  return (
    <BlogPosts>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <BlogPostPreview key={post.id}>
              <h1>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </BlogPostPreview>
          );
        })}
    </BlogPosts>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.object,
};
