import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import EncSection from "../components/encSection";

const EncyclopediaPage = (props) => {
  const sections = props.data.allMongodbPersonalSiteDbEncsections.edges;

  return (
    <Layout pageTitle="Encyclopedia">
      {sections.map((section) => {
        return (
          <EncSection
            title={section.node.name}
            description={section.node.description}
            topics={section.node.topic}
          />
        );
      })}
    </Layout>
  );
};

export default EncyclopediaPage;

export const sectionQuery = graphql`
  query {
    allMongodbPersonalSiteDbEncsections {
      edges {
        node {
          name
          mongodb_id
          description
          topic {
            articleId
            name
          }
        }
      }
    }
  }
`;
