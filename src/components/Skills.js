import React from 'react';
import config from '../../config';

const Skills = () => (
  <section id="three" className="wrapper style3 special">
    <div className="inner">
      <header className="major">
        <h2>Skills</h2>
      </header>
      <p>Languages, Tools and Frameworks I have developed with:</p>
      <div className="skills-container">
        <ul className="skills">
          {config.skills.map(skill => (
            <li>
              <span className="button primary disabled">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <p>Currently exploring and learning:</p>
      <ul className="skills">
        <li>
          <span className="button primary disabled">Python</span>
        </li>
        <li>
          <span className="button primary disabled">Go</span>
        </li>
        <li>
          <span className="button primary disabled">GraphQL</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
