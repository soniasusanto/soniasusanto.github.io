import React from 'react';
import sunsetRailway from '../assets/images/sunsetrailway.png';
import iHash from '../assets/images/ihash.png';
import shelterInPets from '../assets/images/shelter-in-pets.gif';
import pic3 from '../assets/images/pic03.png';
import Layout from '../components/Layout';

const Projects = () => (
  <Layout>
    <section id="project-header" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <p>Projects</p>
        </header>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={sunsetRailway} alt="" className="project-images" />
        </div>
        <div className="content">
          <h3>Sunset Railway Cafe</h3>
          <h4>A restaurant website front-end UI mockup</h4>
          <br />
          <p>
            This static restaurant website was built for a cafe in Singapore.
          </p>
          <p>Built with JavaScript, React, CSS and Bootstrap.</p>

          <ul className="icons">
            <li>
              <a
                href="https://sunsetrailwaycafe.herokuapp.com/"
                className="icon solid fa-external-link-alt"
              >
                <span className="label">Link</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={shelterInPets} alt="" className="pic2" />
        </div>
        <div className="content">
          <h3>Shelter-in-Pets</h3>
          <h4>A pet adoption mobile application</h4>
          <br />
          <p>
            Shelter-in-Pets was built during the COVID-19 lockdown. My team and
            I wanted to build an application that helped people e-visit and
            adopt shelter dogs. The app matches user-uploaded dog images to
            similar adoptable dogs, allows a user to conduct filtered searches
            based on desired traits, and even recommends adoptable dogs based on
            the user’s in-app activity.
          </p>
          <p>
            Built with React Native, Redux, Node.js, Express.js, PostgreSQL,
            Clarifai API and Petfinder API.
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/soniasusanto/shelter-in-pets"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://expo.io/@shelterinpets/ShelterInPets?release-channel=prod"
                className="icon solid fa-mobile-alt"
              >
                <span className="label">Mobile App</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={iHash} alt="" className="ihash" />
        </div>
        <div className="content">
          <h3>iHash</h3>
          <h4>A mobile application that generates hashtags</h4>
          <br />
          <p>
            Fascinated by image recognition technologies, I wanted to build an
            application that recognizes uploaded images and generates relevant
            hashtags. The app was built during a 4 day hackathon. While it was
            challenging to learn a new language and Tensorflow Lite in such a
            short period of time, I was pleased that I was able to incorporate a
            pretrained machine learning model and user login authentication flow
            in my mobile application.
          </p>
          <p>Built with Flutter, Dart, Firebase and TensorFlow Lite. </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/soniasusanto/iHash"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" className="project-images" />
        </div>
        <div className="content">
          <h3>FameX</h3>
          <h4>An e-commerce website</h4>
          <br />
          <p>
            A travel e-commerce website for purchasing experiences with the
            famous. It features a RESTful and persistent shopping cart
            functionality and is styled with Material UI.
          </p>
          <p>
            Built with JavaScript, React, Redux, Node.js, Express.js,
            PostgreSQL, Sequelize, Material UI and CSS
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/soniasusanto/FameX"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="http://famex.herokuapp.com/"
                className="icon solid fa-external-link-alt"
              >
                <span className="label">Link</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default Projects;
