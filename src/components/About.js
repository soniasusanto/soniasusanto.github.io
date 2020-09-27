import React from 'react';
import config from '../../config';

const About = () => (
  <section id="about" className="wrapper style1 special">
    <div className="inner">
      <header className="major">
        <h2>About Me</h2>
        <p>
          I am a full stack software engineer based in New York City. I enjoy
          engaging in creative problem solving to build easy to use and
          impactful solutions. You'll often find me programming to Lo-Fi.
          <br />
          <br />
          Outside of the coding world, I am a tea-lover and a huge foodie. I
          enjoy doing Pilates, cycling with Peloton (my favorite instructors are
          Alex and Robin), playing video games, and watching cute dog videos on
          Youtube.
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
          <a href="/Projects" className="button primary">
            Projects
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
