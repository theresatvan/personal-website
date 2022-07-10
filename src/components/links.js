import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Links = () => {
    return (
        <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <a
            href="mailto:theresatvan@gmail.com"
            target="_blank"
            rel="noreferrer"
            alt="email link"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://github.com/theresatvan"
            target="_blank"
            rel="noreferrer"
            alt="github link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="list-group-item">
          <a
            href="https://www.linkedin.com/in/theresa-van-40b2b6160/"
            target="_blank"
            rel="noreferrer"
            alt="linkedin link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    )
}

export default Links;