import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Col, Row } from "react-bootstrap";

// markup
const IndexPage = ({ data }) => {
  const profile = getImage(data.contentfulAsset.gatsbyImageData);
  const description = data.contentfulAsset.description;

  return (
    <Layout pageTitle="Theresa T Van">
      <div id="mantra">
        <h2>a work in progress</h2>
        <h3>always a student</h3>
      </div>

      <div id="intro">
      <Container>
        <Row>
          <Col lg={4}>
            <GatsbyImage image={profile} alt={description} />
          </Col>
          <Col lg={8}>
          <div className="text-bubble">
            <h4>Hello there!</h4>
            <p>
              I'm Theresa. I am a software engineer seeking out intelligent
              solutions for every problem. I initially intended for this website
              to be a portfolio for my past works ... but that's boring. So, I
              decided to create something a bit more personal to me. Here, you
              will be able to view my resume as well as other things I am
              currently working on, whether it be a programming project or a
              crochet project. From this website I hope this will help you, the
              viewer, capture the essence of who I am as a person. Thank you!
            </p>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const profileQuery = graphql`
  query {
    contentfulAsset(title: { eq: "Theresa T Van profile pic" }) {
      gatsbyImageData
      description
    }
  }
`;
