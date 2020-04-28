import React from "react";

import "./main.css";
import "./fancy.min.css";
import "./base.min.css";

import overlay from "../../assets/wet-overlay.png";

import Email from "../contact/email";

const Resume = props => {
  return (
    <div>
      {/* <div id="sidebar">
                <div id="outline">
                </div>
            </div>
            <div id="page-container"> */}
      <Email />
      <div id="pf1" className="pf w0 h0" data-page-no="1">
        <img id="paper" class="paperdry" src={overlay} />
        <div className="pc pc1 w0 h0">
          <div className="c x0 y0 w1 h1">
            <div className="t m0 x1 h2 y1 ff1 fs0 fc0 sc0 ls0 ws0">
              Daniel Briksza
            </div>
            <div className="t m0 x1 h3 y2 ff2 fs1 fc0 sc0 ls0 ws0">
              I can finally follow my passion for coding and am ready to put my
              work ethic{" "}
            </div>
            <div className="t m0 x1 h3 y3 ff2 fs1 fc0 sc0 ls0 ws0">
              that I’ve grown and nurtured, my tenacity and love of coding, and
              my{" "}
            </div>
            <div className="t m0 x1 h3 y4 ff2 fs1 fc0 sc0 ls0 ws0">
              personal beliefs that if I’m going to put out a product, provide a
              service, or do{" "}
            </div>
            <div className="t m0 x1 h3 y5 ff2 fs1 fc0 sc0 ls0 ws0">
              anything worth doing that it will be the best I can do and it will
              be damn good.{" "}
            </div>
          </div>
          <div className="c x2 y0 w2 h1">
            <div className="t m0 x1 h4 y6 ff3 fs1 fc0 sc0 ls0 ws0">
              27 Meyer Avenue
            </div>
            <div className="t m0 x1 h4 y7 ff3 fs1 fc0 sc0 ls0 ws0">
              Valley Stream NY, 11580
            </div>
            <div className="t m0 x1 h4 y8 ff4 fs1 fc0 sc0 ls0 ws0">
              https://github.com/dbriksza
            </div>
            <div className="t m0 x1 h4 y9 ff4 fs1 fc0 sc0 ls0 ws0">
              dbriksza@gmail.com
            </div>
          </div>
        </div>
        <div
          className="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
        <div className="pc pc2 w0 h0" style={{ top: "150px" }}>
          <img className="bi x3 ya w3 h5" alt="" src="bg2.png" />
          <div className="c x0 yb w1 h6">
            <div className="t m0 x1 h4 yc ff4 fs1 fc1 sc0 ls0 ws0">
              EXPERIENCE
            </div>
            <div className="t m0 x1 h7 yd ff1 fs2 fc0 sc0 ls0 ws0">
              Carvel,{" "}
              <span className="ff5">
                Valley Stream — <span className="ff6">store clerk</span>
              </span>
            </div>
            <div className="t m0 x1 h8 ye ff3 fs3 fc2 sc0 ls0 ws0">
              MAY 2013 - AUGUST 2016
            </div>
            <div className="t m0 x1 h9 yf ff5 fs1 fc2 sc0 ls0 ws0">
              Customer service and keeping the store in working order.
            </div>
            <div className="t m0 x1 h7 y10 ff1 fs2 fc0 sc0 ls0 ws0">
              Target,{" "}
              <span className="ff5">
                South Setauket — <span className="ff6">food service</span>
              </span>
            </div>
            <div className="t m0 x1 h8 y11 ff3 fs3 fc2 sc0 ls0 ws0">
              SEPTEMBER 2016 - DECEMBER 2016
            </div>
            <div className="t m0 x1 h9 y12 ff5 fs1 fc2 sc0 ls0 ws0">
              Worked in both the kitchen and as a barista for the in house
              Starbucks.
            </div>
            <div className="t m0 x1 h7 y13 ff1 fs2 fc0 sc0 ls0 ws0">
              Hallmark, <span className="ff5">Nassau County</span>{" "}
              <span className="ff5">
                — <span className="ff6">installation</span>
              </span>
            </div>
            <div className="t m0 x1 h8 y14 ff3 fs3 fc2 sc0 ls0 ws0">
              FEBRUARY 2017 - FEBRUARY 2018
            </div>
            <div className="t m0 x1 h9 y15 ff5 fs1 fc2 sc0 ls0 ws0">
              Managed teams of up to a dozen people at various locations across
              the{" "}
            </div>
            <div className="t m0 x1 h9 y16 ff5 fs1 fc2 sc0 ls0 ws0">
              county. In charge or upwards of $10,000 in merchandise per store.
            </div>
            <div className="t m0 x1 h4 y17 ff4 fs1 fc1 sc0 ls0 ws0">
              EDUCATION
            </div>
            <div className="t m0 x1 h7 y18 ff1 fs2 fc0 sc0 ls0 ws0">
              Lambda School
            </div>
            <div className="t m0 x1 h8 y19 ff3 fs3 fc2 sc0 ls0 ws0">
              AUGUST 2019 - PRESENT
            </div>
            <div className="t m0 x1 h9 y1a ff5 fs1 fc2 sc0 ls0 ws0">
              Full Stack Web Development
            </div>
            <div className="t m0 x1 h7 y1b ff1 fs2 fc0 sc0 ls0 ws0">
              Stony Brook University,{" "}
              <span className="ff5">Stony Brook, NY</span>
            </div>
            <div className="t m0 x1 h8 y1c ff3 fs3 fc2 sc0 ls0 ws0">
              AUGUST 2015 - MAY 2016
            </div>
            <div className="t m0 x1 h9 y1d ff5 fs1 fc2 sc0 ls0 ws0">
              Electrical Engineering
            </div>
            <div className="t m0 x1 h4 y1e ff4 fs1 fc1 sc0 ls0 ws0">
              LANGUAGES, FRAMEWORKS, TECHNOLOGIES, ETC
            </div>
            <div className="t m0 x1 h9 y1f ff5 fs1 fc2 sc0 ls0 ws0">
              CSS, HTML, JavaScript, React.js, SQL, RESTFUL API, node.js,
              Express.js,{" "}
            </div>
            <div className="t m0 x1 h9 y20 ff5 fs1 fc2 sc0 ls0 ws0">
              Knex.js, SASS, LESS, Postgres
            </div>
          </div>
          <div className="c x2 yb w2 h6">
            <div className="t m0 x1 h4 yc ff4 fs1 fc1 sc0 ls0 ws0">SKILLS</div>
            <div className="t m0 x4 h9 y21 ff5 fs1 fc2 sc0 ls0 ws0">
              Front-End Web{" "}
            </div>
            <div className="t m0 x1 h9 y22 ff5 fs1 fc2 sc0 ls0 ws0">
              Development
            </div>
            <div className="t m0 x4 h9 y23 ff5 fs1 fc2 sc0 ls0 ws0">
              Back-End Web{" "}
            </div>
            <div className="t m0 x1 h9 y24 ff5 fs1 fc2 sc0 ls0 ws0">
              Development
            </div>
            <div className="t m0 x4 h9 y25 ff5 fs1 fc2 sc0 ls0 ws0">
              Management
            </div>
            <div className="t m0 x4 h9 y26 ff5 fs1 fc2 sc0 ls0 ws0">
              Customer Service
            </div>
            <div className="t m0 x1 h4 y27 ff4 fs1 fc1 sc0 ls0 ws0">
              PROJECTS
            </div>
            <div className="t m0 x1 ha y28 ff1 fs1 fc2 sc0 ls0 ws0">
              https://v1.citrics.io<span className="ff5"> My Lambda </span>
            </div>
            <div className="t m0 x1 h9 y29 ff5 fs1 fc2 sc0 ls0 ws0">
              labs project. Worked on a{" "}
            </div>
            <div className="t m0 x1 h9 y2a ff5 fs1 fc2 sc0 ls0 ws0">
              team with UI/UX, data{" "}
            </div>
            <div className="t m0 x1 h9 y2b ff5 fs1 fc2 sc0 ls0 ws0">
              scientists, and other web{" "}
            </div>
            <div className="t m0 x1 h9 y2c ff5 fs1 fc2 sc0 ls0 ws0">
              developers
            </div>
            <div className="t m0 x1 h9 y2d ff5 fs1 fc3 sc0 ls0 ws0">
              https://portfolio.dbriksza.no
            </div>
            <div className="t m0 x1 h9 y2e ff5 fs1 fc3 sc0 ls0 ws0">
              w.sh/<span className="fc2"> my portfolio site- </span>
            </div>
            <div className="t m0 x1 h9 y2f ff5 fs1 fc2 sc0 ls0 ws0">
              always under development as{" "}
            </div>
            <div className="t m0 x1 h9 y30 ff5 fs1 fc2 sc0 ls0 ws0">
              I acquire new skills
            </div>
            <div className="t m0 x1 ha y31 ff1 fs1 fc2 sc0 ls0 ws0">
              https://github.com/dbriksza?
            </div>
            <div className="t m0 x1 ha y32 ff1 fs1 fc2 sc0 ls0 ws0">
              tab=repositories<span className="ff5"> my github </span>
            </div>
            <div className="t m0 x1 h9 y33 ff5 fs1 fc2 sc0 ls0 ws0">
              repositories containing my{" "}
            </div>
            <div className="t m0 x1 h9 y34 ff5 fs1 fc2 sc0 ls0 ws0">
              projects too numerous to list{" "}
            </div>
            <div className="t m0 x1 h9 y35 ff5 fs1 fc2 sc0 ls0 ws0">here</div>
          </div>
          <a className="l" href="https://portfolio.dbriksza.now.sh/">
            <div
              className="d m1"
              style={{
                borderStyle: "none",
                position: "absolute",
                left: "416.050018px",
                bottom: "442.409027px",
                width: "128.123993px",
                height: "11.312988px",
                backgroundColor: "rgba(255,255,255,0.000001)"
              }}
            ></div>
          </a>
          <a className="l" href="https://portfolio.dbriksza.now.sh/">
            <div
              className="d m1"
              style={{
                borderStyle: "none",
                position: "absolute",
                left: "416.050018px",
                bottom: "427.703003px",
                width: "24.290985px",
                height: "11.313019px",
                backgroundColor: "rgba(255,255,255,0.000001)"
              }}
            ></div>
          </a>
        </div>
        <div
          className="pi"
          data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'
        ></div>
      </div>
      {/* <div id="pf2" className="pf w0 h0" data-page-no="2">

                </div> */}
      {/* </div> */}
      <div className="loading-indicator"></div>
    </div>
  );
};

export default Resume;
