import React from 'react';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.gif';
import pic3 from '../assets/images/pic03.png';

const Projects = () => (
  <section id="two" className="wrapper alt style2">
    <section className="spotlight">
      <div className="image">
        <img src={pic1} alt="" />
      </div>
      <div className="content">
        <h2>
          Magna primis lobortis
          <br />
          sed ullamcorper
        </h2>
        <p>
          Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
          imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
        </p>
      </div>
    </section>
    <section className="spotlight">
      <div className="image">
        <img src={pic2} alt="" />
      </div>
      <div className="content">
        <h2>
          Tortor dolore feugiat
          <br />
          elementum magna
        </h2>
        <p>
          Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
          imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
        </p>
      </div>
    </section>
    <section className="spotlight">
      <div className="image">
        <img src={pic3} alt="" />
      </div>
      <div className="content">
        <h3>An e-commerce website</h3>
        <p>
          Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
          imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
        </p>
      </div>
    </section>
  </section>
);

export default Projects;
