import React from 'react';

import './Contact.css';

const Contact = () => {
  return (
    <div className="wrapper-contact">
      <div className="contact-title">
        <h1>Contact</h1>
        <h4>Interested to work with me ?</h4>
      </div>
      <div className="contact-links">
        <div className="email-cont" data-aos="fade-up" data-aos-duration="1000">
          <a
            href="http://www.hamadadev2016@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-envelope-o fa-5x" />
          </a>
        </div>
        <div
          className="linkedin-cont"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <a
            href="https://www.linkedin.com/in/rayhan-hamada-033021194/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin-square fa-5x" />
          </a>
        </div>
        <div className="ig-cont" data-aos="fade-up" data-aos-duration="2000">
          <a
            href="https://www.instagram.com/rayhamada/?hl=id"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram fa-5x" />
          </a>
        </div>
        <div
          className="github-cont"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <a
            href="https://github.com/RayhanHamada"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github fa-5x" />
          </a>
        </div>
        <div
          className="medium-cont"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <a href="#">
            <i className="fa fa-medium fa-5x" />
          </a>
        </div>
        <div
          className="facebook-cont"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <a
            href="https://web.facebook.com/rayhan.schonemenschen"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook fa-5x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
