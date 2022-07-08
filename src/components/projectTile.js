import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import githubIcon from "../images/GitHub-Mark-32px.png";

const ProjectTile = (props) => {
  return (
    <div className="tile-left">
      <GatsbyImage id="project-image" image={getImage(props.image)} />
      <div className="text-bubble">
        <h3>{props.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
        <a href={props.links[0]}>
          <img src={githubIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;
