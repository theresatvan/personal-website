import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-scroll"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query footerLandingTitleQuery {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    return (
        <footer>
            <div className="container py-4">
                <div className="row justify-content-center mt-2">
                    <ul className="list-style-none">
                        <li className="list-inline-item ms-2">
                            <Link to="hero" className="link" smooth={true} role="button" aria-label="To the top">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </Link>
                        </li>
                        <li className="list-inline-item me-4" alt="site title">
                            &copy; {new Date().getFullYear()}.{" "}
                            {data.site.siteMetadata.title}
                        </li>
                        <li className="list-inline-item me-4">
                            <a 
                                href="mailto:theresatvan@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                alt="email link">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a 
                                href="https://github.com/theresatvan"
                                target="_blank"
                                rel="noreferrer"
                                alt="github link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a 
                                href="https://www.linkedin.com/in/theresa-van-40b2b6160/"
                                target="_blank"
                                rel="noreferrer"
                                alt="linkedin link">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;