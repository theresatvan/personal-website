import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      allSkillsJson {
        edges {
          node {
            skill
          }
        }
      }
      allProjectsJson {
        edges {
          node {
            project
            skills
            description
            link
          }
        }
      }
    }
  `);

  return (
    <section id="content" className="content">
      <div className="container">
        {/* Education subsection */}
        <div className="subsection">
          <h2 className="mt-5">Education</h2>

          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3>New York University, Tandon School of Engineering</h3>
                <h4>
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />{" "}
                  M.S. in Computer Science
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />{" "}
                  Sept 2022 - Present
                </h4>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3>California State Polytechnic University, Pomona</h3>
                <h4>
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />{" "}
                  B.S. in Computer Science, Minor in Statistics
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />{" "}
                  Sept 2016 - May 2020
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Skills subsection */}
        <div className="subsection">
          <h2 className="mt-5">Notable Skills</h2>

          <div className="row">
            {data.allSkillsJson.edges.map(({ node }, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card">
                  <div className="card-text">
                    <div className="card-item">
                      <FontAwesomeIcon
                        icon={faTerminal}
                        className="mr-2 item-icon"
                      />{" "}
                      {node.skill}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience subsection */}
        <div className="subsection">
          <h2 className="mt-5">Experience</h2>

          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3>CrowdStrike</h3>
                <h4>
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />{" "}
                  Technical Support Engineer
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" /> June
                  2020 - July 2021
                </h4>
              </div>

              <div className="card-text">
                ◆ Troubleshooted customer cases and provided viable solutions to
                ensure an average customer satisfaction grade of 9 out of a
                score of 10
                <br />
                ◆ Streamlined the procedure spinning up AWS EC2 images by
                integrating the process with Cloudformation templates
                <br />◆ Crafted comprehensive Splunk queries that return events
                necessary for threat hunting and detection explanation cases
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3>CrowdStrike</h3>
                <h4>
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />{" "}
                  Customer Success Intern
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" /> May
                  2019 - May 2020
                </h4>
              </div>

              <div className="card-text">
                ◆ Integrated AWS EC2 into the Customer Success team's testing
                and training processes
                <br />
                ◆ Led and deployed training initiative troubleshooting
                CrowdStrike products by creating interactive images simulating
                common cases through VMWare
                <br />◆ Developed an internal Python application that retrieves
                client data from multiple Excel files and compiles that data
                into a Quarterly Business Report <span>(</span>QBR<span>)</span>{" "}
                draft, improving the creation of QBR’s to be 6 times faster than
                its previous average creation time
              </div>
            </div>
          </div>
        </div>

        {/* Projects subsection */}
        <div className="subsection">
          <h2 className="mt-5">Projects</h2>

          <div className="row">
            {data.allProjectsJson.edges.map(({ node }, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="card-title">
                      <h3>{node.project}</h3>
                      <h4>
                        <FontAwesomeIcon icon={faCode} className="mr-2" />{" "}
                        {node.skills}
                      </h4>
                    </div>

                    <div className="card-text">{node.description}</div>
                  </div>
                  <div className="card-footer">
                    <a href={node.link} target="_blank" rel="noreferrer">
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
