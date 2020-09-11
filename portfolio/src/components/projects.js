import React from "react";

import CitricsIMG from "../assets/citrics.PNG";
import SFRIMG from "../assets/sfr.PNG";

const Projects = () => {
  return (
    <div id="projectContainer">
      <div>
        <h3>
          <p>Citrics.io</p>
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
      <img src={CitricsIMG} style={{ width: "75%" }} />
      <p>
        Unfortunately, this site has been taken down due to administration costs
        on the DS side. However, you can find the git repos below for an idea of
        how the site worked.
      </p>
      <a href="https://github.com/dbriksza/city-data-comparison-fe">
        Citrics.io Frontend on github
      </a>
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
      {window.innerWidth >= 700 ? (
        <iframe
          className="iframe-loading"
          src="https://frontend.bw-secret-family-recipes.now.sh"
        >
          Sorry your browser does not support inline frames.
        </iframe>
      ) : (
        <a href="https://frontend.bw-secret-family-recipes.now.sh">
          <img src={SFRIMG} />
        </a>
      )}
      <div>
        <h3>
          <a href="https://github.com/dbriksza/python-scripts">
            Some Python Scripts!
          </a>
        </h3>
        <p class="projectBlurbs">
          These python scripts were made to automate the process of editing
          HTMLs. In the process of redoing a blog site, I quickly realized
          editing 500+ pages of HTML would not be efficient without the use of
          some python. These scripts are capable of editing any amount of HTML's
          to remove and add styling, text, bloat, scripts and whatever else.
          There is also functionality to put HTML's in proper directories based
          on whatever makes the most sense (dates for this blog site) so it
          would be a fully functional site- including linking the pages to one
          another so it's fully navigable- so just upload the whole file
          strcucture to whatever hosting service for a fully working website!
          (It's not super easy to use, but it's pretty powerful, and with some
          more work it might get there)
        </p>
        <h4>Tech Stack</h4>
        <ul>
          <li>Python 3.8</li>
        </ul>
      </div>
      <div>
        <h3>
          <a href="https://github.com/dbriksza/danco_keys">
            Customizeable Macro Keys
          </a>
        </h3>
        <p class="projectBlurbs">
          This is a piece of software that lets the user bind commands to any
          key on the keyboard. Useful for quickly typing messages.
        </p>
      </div>
    </div>
  );
};

export default Projects;
