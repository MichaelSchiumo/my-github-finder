import React from 'react';
import { Fragment } from 'react';

export const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>
        This application allows users to search Github profiles directly from
        the Github API.
      </p>
      <p>
        Once a search has been completed, the user will be able to view
        information related to the profile, as well as a link to directly visit
        the profile on Github's site.
      </p>
    </Fragment>
  );
};

export default About;
