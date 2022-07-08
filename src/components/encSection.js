import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const EncSection = (props) => {
  return (
    <div className="enc-section">
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
      {props.topics.map((topic) => {
        return (
          <div>
            <h4>{topic.name}</h4>
            <GatsbyImage image={getImage(topic.icon.gatsbyImageData)} alt={topic.icon.description} />
          </div>
        );
      })}
    </div>
  );
};

export default EncSection;
