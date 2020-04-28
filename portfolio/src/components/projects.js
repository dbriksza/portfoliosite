import React from "react";

const Projects = () => {
  return (
    <div id="projectContainer">
      <div>
        <h3>
          <a href="https://v1.citrics.io">Citrics.io</a>
        </h3>
        <p class="projectBlurbs">
          Citrics.io is a city data comparison app that was built from scratch
          in 8 weeks. The team that created this consisted of myself and 5 other
          full stack web developers, 3 data scientists, and 1 UX designer. The
          data is compiled mostly from US census data and Zillow, but with a
          couple smaller api's for more niche data (walk score, transit score,
          weather, etc.) The main features I worked on were: backend user
          functionality (OAuth, RDBMS(SQLite for development and Postgres for
          production)), front end animations (css animations, minor graphic
          design work) and map features (rendering data points and on-hover city
          view).
        </p>
        <h4>Tech Stack</h4>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Node.js</li>
          <li>Knex</li>
          <li>Postgres</li>
          <li>Passportjs</li>
          <li>Mapbox</li>
          <li>AWS Elastic Beanstalk</li>
        </ul>
      </div>
      <iframe className="iframe-loading" src="https://v1.citrics.io">
        > Sorry your browser does not support inline frames.
      </iframe>
    </div>
  );
};

export default Projects;
