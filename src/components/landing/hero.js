import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Links from "../links";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          {/* Hero section: Left side */}
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>Hello. I'm Theresa</h1>
              <p>
                I am a MS in CS student at NYU seeking fall and spring software
                engineering internships. If you end up liking what you see, feel 
                free to download my resume!
              </p>
              <a 
              className="main-button btn btn-primary shadow-sm" 
              href="https://docs.google.com/document/d/1W7seYpphhrRDwBlseOvc6G0mBqEnbuwHU2bmg3Uta6g/edit?usp=sharing"
              target="blank">
                Download resume
              </a>
            </div>
          </div>

          {/* Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <StaticImage
                      src="../../images/profile-pic.jpg"
                      // style={{ width: "10rem", height: "10rem" }}
                      alt="hero icon"
                    />
                  </div>
                  <h3 className="card-title">@theresatvan</h3>
                  <p className="card-text">
                    software engineer,
                    <br />
                    full-time cat mom
                  </p>
                  <Links />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
