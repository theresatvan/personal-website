import React from "react";
import { Component } from "react";

import { StaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: "",
    };
  }

  toggleMenu = (value) => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu, visibilityClass } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query headerLandingTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <nav
            id="header"
            className={`navbar navbar-expand-lg ${visibilityClass}`}
          >
            <div className="container">
              <Link
                className="navbar-brand"
                to="header"
                smooth={true}
                role="button"
              >
                {data.site.siteMetadata.title}
              </Link>
              <button
                onClick={(_) => this.toggleMenu(!openMenu)}
                className={`navbar-toggler navbar-toggler-right ${
                  openMenu ? "" : "collapsed"
                }`}
                type="button"
                aria-controls="navbarResponsive"
                aria-expanded={openMenu}
                aria-label="Toggle navigation"
              >
                ⛛
              </button>

              <div
                className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
                id="navbarResponsive"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item my-auto ms-4">
                    <Link
                      classname="nav-link"
                      to="content"
                      smooth={true}
                      role="button"
                    >
                      about me
                    </Link>
                  </li>
                  <li className="nav-item my-auto ms-4">
                    <Link
                      classname="nav-link"
                      to="hero"
                      smooth={true}
                      role="button"
                    >
                      resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      />
    );
  }
}

export default Navigation;
