import { graphql } from "gatsby";
import React from "react";
import Layout from "./layout";

const EncArticle = () => {
  const articles = props.data.allContentfulBlogPost.edges;
  
  return (
    <Layout>
      <h2>Hello World</h2>
      <div dangerouslySetInnerHTML={{
        __html: articles[0].node.content.childMarkdownRemark.html,
      }} />
    </Layout>
  );
};

export default EncArticle;

export const blogQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          content {
            childMarkdownRemark {
              html
            }
          }
          contentful_id
          title
        }
      }
    }
  }
`
