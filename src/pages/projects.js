import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import ProjectTile from "../components/projectTile";

const ProjectsPage = ({ data }) => {
  const projects = data.allContentfulProjects.edges;

  return (
    <Layout pageTitle="Projects">
      {projects.map((project, index) => {
        return (
          <ProjectTile
            key={project.node.contentful_id}
            index={index}
            title={project.node.title}
            tools={project.node.tools}
            description={project.node.description.childMarkdownRemark.html}
            image={project.node.image.gatsbyImageData}
            links={project.node.externalLinks}
          />
        );
      })}
    </Layout>
  );
};

export default ProjectsPage;

export const projectsQuery = graphql`
  query GetProjects {
    allContentfulProjects {
      edges {
        node {
          contentful_id
          description {
            childMarkdownRemark {
              html
            }
          }
          externalLinks
          title
          tools
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
