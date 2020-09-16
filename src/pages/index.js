import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import About from '../components/About';
import Landing from '../components/Landing';

import Skills from '../components/Skills';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Skills />

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Want to collaborate?</h2>
          <h2>New opportunities?</h2>
          <div className="contact-container">
            <p>Reach me by</p>
            <a
              href="https://www.linkedin.com/in/soniasusanto/"
              className="icon brands fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
            <p>or</p>
            <a
              href="mailto:soniasusanto@gmail.com"
              className="icon solid fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </div>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
