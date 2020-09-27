import React from 'react';
import Scroll from '../components/Scroll';
import config from '../../config';

const Landing = () => (
  <section id="banner">
    <div className="inner">
      <h2>{config.heading}</h2>
      <p>{config.subHeading}</p>
      <ul className="actions special">
        <li>
          <Scroll type="id" element="about">
            <a href="/#" className="button primary">
              Explore
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Landing;
