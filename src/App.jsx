import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Landing from './section/Landing';
import About from './section/About';
import Edu from './section/Edu';
import Tech from './section/Tech';
import Works from './section/Works';
import Contact from './section/Contact';
import Footer from './section/Footer';

import './App.css';

export default function App() {
  const [navState, setNavState] = useState({
    currentNav: 'welcome-nav',
  });

  return (
    <div className="app" id="app">
      <Navbar className="navbar" fixed="top">
        <a href="#">
          <Navbar.Brand>
            <h3 className="author">
              <b>Mocchapine</b> | Rayhan Hamada
            </h3>
          </Navbar.Brand>
        </a>

        <Nav.Link
          className="navlink"
          id="welcome-nav"
          style={{
            color:
              navState.currentNav === 'welcome-nav' ? '#e41749' : '#999999',
          }}
          onClick={() => {
            setNavState({ currentNav: 'welcome-nav' });
          }}
          href="#wrapper-landing"
        >
          Welcome
        </Nav.Link>
        <Nav.Link
          className="navlink"
          id="about-nav"
          style={{
            color: navState.currentNav === 'about-nav' ? '#e41749' : '#999999',
          }}
          onClick={() => {
            setNavState({ currentNav: 'about-nav' });
          }}
          href="#wrapper-about"
        >
          About
        </Nav.Link>
        <Nav.Link
          className="navlink"
          id="proj-nav"
          style={{
            color: navState.currentNav === 'proj-nav' ? '#e41749' : '#999999',
          }}
          onClick={() => {
            setNavState({ currentNav: 'proj-nav' });
          }}
          href="#wrapper-works"
        >
          My Works
        </Nav.Link>
        <Nav.Link
          className="navlink"
          id="cont-nav"
          style={{
            color: navState.currentNav === 'cont-nav' ? '#e41749' : '#999999',
          }}
          onClick={() => {
            setNavState({ currentNav: 'cont-nav' });
          }}
        >
          Contact
        </Nav.Link>
      </Navbar>
      <a href="#" className="float">
        <i className="fa fa-envelope-o fa-2x my-float" />
      </a>

      <Landing />
      <About />
      <Edu />
      <Tech />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
