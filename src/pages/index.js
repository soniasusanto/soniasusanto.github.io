import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import About from '../components/About';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Skills />
    <Projects />

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
