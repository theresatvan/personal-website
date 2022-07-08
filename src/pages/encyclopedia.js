import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import EncSection from "../components/encSection";

const EncyclopediaPage = ({ data }) => {
  const sections = data.allContentfulEncSections.edges;

  return (
    <Layout pageTitle="Encyclopedia">
      {sections.map((section) => {
        const node = section.node;

        return (
          <EncSection
            key={node.contentful_id}
            title={node.title}
            description={node.description.childMarkdownRemark.html}
            topics={node.topics}
          />
        );
      })}
    </Layout>
  );
};

export default EncyclopediaPage;

export const sectionsQuery = graphql`
  query GetSections {
    allContentfulEncSections {
      edges {
        node {
          contentful_id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          topics {
            name
            slug
            icon {
              gatsbyImageData
              title
              description
            }
          }
        }
      }
    }
  }
`;
