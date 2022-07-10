import React from "react";

import Layout from "../components/layout";
import Hero from "../components/landing/hero";
import Content from "../components/landing/content";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Content />
    </Layout>
  );
};

export default IndexPage;
