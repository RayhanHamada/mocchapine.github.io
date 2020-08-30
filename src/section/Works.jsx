import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Works.css';

const Works = () => {
  return (
    <div className="wrapper-works" id="wrapper-works">
      <div className="works-title">
        <h1>My Works</h1>
        <h4>
          A good learning is followed by some practices, here&apos;s some of my
          small projects
        </h4>
      </div>
      <div className="works-group">
        <div className="work">
          <h3 className="work-title">Gelar js</h3>
          <hr />
          <p>
            A simple npm package for saving your project structure in a YAML
            file.
          </p>
          <div className="work-links">
            <a
              href="https://github.com/RayhanHamada/gelar-js"
              className="github-link"
            >
              <i className="fa fa-github fa-3x" />
            </a>
          </div>
        </div>
        <div className="work">
          <h3 className="work-title">Wik Wik Fake Search Engine</h3>
          <hr />
          <p>
            A fake search engine like google, but functional, made using only
            React and CSS.
          </p>
          <div className="work-links">
            <a
              href="https://github.com/RayhanHamada/wik-wik-fake-search-engine"
              className="github-link"
            >
              <i className="fa fa-github fa-3x" />
            </a>
          </div>
        </div>
        <div className="work">
          <h3 className="work-title">JSONku</h3>
          <hr />
          <p>
            A Java library for modify JSON file or JSON string, using ANTLR
            framework. Initially built because i need additional tools for one
            of my old java projects. This library support JSON pointer,
            currently for getters.
          </p>
          <div className="work-links">
            <a
              href="https://github.com/RayhanHamada/jsonku"
              className="github-link"
            >
              <i className="fa fa-github fa-3x" />
            </a>
          </div>
        </div>
        <div className="work">
          <h3 className="work-title">Simple Text Editor</h3>
          <hr />
          <p>A simple text editor. My first JavaFx project.</p>
          <div className="work-links">
            <a
              href="https://github.com/RayhanHamada/Editor-Text-Simpel"
              className="github-link"
            >
              <i className="fa fa-github fa-3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
