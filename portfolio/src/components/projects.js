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
          couple smaller API's for more niche data (walk score, transit score,
          weather, etc.) The main features I worked on were: backend user
          functionality (OAuth, RDBMS (SQLite for development and Postgres for
          production)), front end animations (CSS animations, minor graphic
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
      <div>
        <h3>
          <a href="https://frontend.bw-secret-family-recipes.now.sh">
            Secret Family Recipe
          </a>
        </h3>
        <p class="projectBlurbs">
          Secret Family Recipes, while originally intended to be an online index
          of privately viewable user-generated recipes, ended up being an
          interface for saving recipes locally (The backend developer fell
          through, but being agile devs, we were able to salvage the project).
          Built in a week by 5 front-end developers, this website highlights the
          ability to work quickly and change direction at a moment's notice.
          This was all done in order to meet deadlines and push out a product
          that meets and exceeds the minimum viable product
        </p>
        <h4>Tech Stack</h4>
        <ul>
          <li>React</li>
          <li>Sass</li>
          <li>Styled Compnents</li>
          <li>Redux</li>
        </ul>
      </div>
      <iframe
        className="iframe-loading"
        src="https://frontend.bw-secret-family-recipes.now.sh"
      >
        > Sorry your browser does not support inline frames.
      </iframe>
    </div>
  );
};

export default Projects;
