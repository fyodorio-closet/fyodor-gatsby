import React from 'react';
import Helmet from 'react-helmet';

import './about.scss';

const AboutPage = () => (
  <div className="about-page">
    <Helmet title={`About - My Days Of Code`} />
    <h1>Who Am I?</h1>
    <p>My name is Fyodor. I'm a Software Developer. I use HTML, CSS and JavaScript to create web applications with a focus on simplicity, both in design and in implementation.</p>
    <p>My tools of choice are:</p>
    <ul>
      <li>Semantic HTML and Web Components</li>
      <li>SASS for CSS preprocessing</li>
      <li>Latest ECMAScript / TypeScript</li>
      <li>Webpack for module transpiling and bundling the sources</li>
      <li>Karma+Mocha+Chai+Sinon for Unit Testing</li>
      <li>ESLint for code checks</li>
      <li>Yarn for running all the scripts and automation</li>
      <li>Git for Version Control</li>
      <li>AngularJS / Angular for severe mood</li>
      <li>React for sassy mood</li>
      <li>Bootstrap for fast app prototyping</li>
      <li>Gatsby.js for building solid and simple web pages (e.g. this one)</li>
      <li>Codepen for experiments and Code Art</li>
      <li>Functional Programming as a preffered coding paradigm</li>
      <li>WebStorm for severe mood</li>
      <li>VSCode for sassy mood</li>
      <li>JAVA and IDEA when I get nostalgic about Object-Oriented Programming</li>
      <li>A pencil and a paper for design mockups</li>
    </ul>
    <p>I'm a passionate learner and try to get new knowledge with any opportunity. That's why I <a target="_blank" href="https://github.com/loenko/100-days-of-code/blob/master/log.md">participate in #100DaysOfCode challenge</a> and use this blog to record some related thoughts.</p>
  </div>
)

export default AboutPage
