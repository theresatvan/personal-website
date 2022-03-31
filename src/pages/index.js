import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Theresa T Van">
      <div id="mantra">
        <h2>a work in progress</h2>
        <h3>always a student</h3>
      </div>

      <div id="intro">
        <h4>Hello there!</h4>
        <p>I'm Theresa. I am a software engineer seeking out intelligent solutions for every problem.
           I initially intended for this website to be a portfolio for my past works ... but that's 
           boring. So, I decided to create something a bit more personal to me. Here, you will be 
           able to view my resume as well as other things I am currently working on, whether it be 
           a programming project or a crochet project. From this website I hope this will help you, 
           the viewer, capture the essence of who I am as a person. Thank you!
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
