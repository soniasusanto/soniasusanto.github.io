import React from 'react';
import Scroll from '../components/Scroll';
import config from '../../config';

const About = () => (
  <section id="one" className="wrapper style1 special">
    <div className="inner">
      <header className="major">
        <h2>About Me</h2>
        <p>
          I am a full stack software engineer based in New York City. I enjoy
          engaging in creative problem solving to build easy to use and
          impactful solutions.
          <br />
          <br />
          Outside of the coding world, I am a tea-lover and a huge foodie. I
          enjoy doing Pilates, playing video games (currently, it's Animal
          Crossing), and watching cute dog videos on Youtube.
        </p>
      </header>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="actions special">
        <li>
          <Scroll type="id" element="two">
            <a href="#" className="button primary">
              Projects
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
