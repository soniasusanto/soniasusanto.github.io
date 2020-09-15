import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';

const Skills = () => (
  <section id="three" className="wrapper style3 special">
    <div className="inner">
      <header className="major">
        <h2>Skills</h2>
        <p>
          Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
          eleifend
          <br />
          fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
          ullamcorper.
        </p>
      </header>

      <ul className="skills">
        {config.skills.map(skill => (
          <li>
            <span className="button primary disabled">{skill.name}</span>
          </li>
        ))}
      </ul>

      {/* <ul className="features">
        <li className="icon fa-paper-plane">
          <h3>Arcu accumsan</h3>
          <p>
            Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
            tincidunt nullam amet leo Aenean ligula consequat consequat.
          </p>
        </li>
        <li className="icon solid fa-laptop">
          <h3>Ac Augue Eget</h3>
          <p>
            Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
            tincidunt nullam amet leo Aenean ligula consequat consequat.
          </p>
        </li>
        <li className="icon solid fa-code">
          <h3>Mus Scelerisque</h3>
          <p>
            Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
            tincidunt nullam amet leo Aenean ligula consequat consequat.
          </p>
        </li>
        <li className="icon solid fa-headphones-alt">
          <h3>Mauris Imperdiet</h3>
          <p>
            Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
            tincidunt nullam amet leo Aenean ligula consequat consequat.
          </p>
        </li>
        <li className="icon fa-heart">
          <h3>Aenean Primis</h3>
          <p>
            Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
            tincidunt nullam amet leo Aenean ligula consequat consequat.
          </p>
        </li>
        <li className="icon fa-flag">
          <h3>Tortor Ut</h3>
          <p>
            Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
            tincidunt nullam amet leo Aenean ligula consequat consequat.
          </p>
        </li>
      </ul> */}
    </div>
  </section>
);

export default Skills;
