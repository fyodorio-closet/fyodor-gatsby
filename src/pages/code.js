import React from 'react';
import Helmet from 'react-helmet';

const CodePage = () => (
  <div>
    <Helmet title={`Code - My Days Of Code`} />
    <h1>My Code Portfolio</h1>
    <p>You can find the examples of my code here. Not much, actually, because I work at my first professional Software Developer job currently, and its results are under NDA. But I can share my own work-related and spare-time experience here to show the things I can and like to do, and the directions I want to develop my skills in.</p>
    <h2>Problem Solving</h2>
    <p>Most of these code samles were developed and used in one or another form inside of real world applications for solving corresponding challenges and issues.</p>
    <ul>
      <li><a href="https://codepen.io/loenko/pen/gWZzjY">Template Populator</a> - a simple code for generating a document (in different formats) containing predefined template and user input data populated in it</li>
      <li><a href="https://codepen.io/loenko/pen/EvBoPL">Routless Routing</a> - AngularJS code for routing inside simple application without using any routing library</li>
      <li><a href="https://github.com/loenko/ng-routing">AngularJS routing experiments</a> - some ways for solving compatibility problems when using AngularJS modules built with different routing libraries</li>
      <li><a href="https://codepen.io/loenko/pen/QqLXVo">Vertical tabs for Angular Material</a> - small component complementing Angular Material library with corresponding functionality</li>
      <li><a href="https://github.com/loenko/onlyoffice-documentbuilder">OnlyOffice Document Builder</a> - nodejs example of OnlyOffice Document Builder integration into web application with fixed bugs (present in official build)</li>
      <li><a href="https://codepen.io/loenko/pen/RpVdoM">Editable Google Docs embedding</a> - example of Google Document embedding with active editing controls</li>
      <li><a href="https://codepen.io/loenko/pen/PEzdQv">Disabled date tooltip</a> - workaround for md-datepicker disabled date hover (Angular Material)</li>
    </ul>
    <h2>Pet Projects</h2>
    <p>The code I try to develop in my spare time and am going to make production-ready the other day.</p>
    <ul>
      <li><a href="https://github.com/loenko/ng18-starter">ng18-starter</a> - simple modern starter for AngularJS + Angular Material + ES6 + Sass + Webpack using latest AngularJS best practices and approaches</li>
      <li><a href="https://github.com/loenko/my-days-of-code">my-days-of-code</a> - the repository for this blog made with Gatsby and React where I experiment with these two tools along with GraphQL, Sass, Markdown and other interesting stuff</li>
      <li><a href="https://github.com/loenko/maker-app">Maker App</a> - task management React application I want to extend with financial/fitness tracking and other bells and whistles</li>
    </ul>
    <h2>For The Soul</h2>
    <p>The code samples I use for learning, self-development and fun.</p>
    <ul>
      <li><a href="https://github.com/loenko/gh-profile-viewer">1</a>, <a href="https://github.com/loenko/react-quiz">2</a>, <a href="https://github.com/loenko/movie-finder">3</a> - some code examples I developed during learning React/Flux and related tools/technologies</li>
      <li><a href="https://github.com/loenko/js-algorithms">JS algorithms</a> - set of CS algorithms implementations I use on my learning path</li>
      <li><a href="https://codepen.io/loenko/pen/baOwRP">JS programming idioms</a> - testing some of the most popular and widely used javascript idioms</li>
    </ul>
    <h2>Code Art</h2>
    <p>CSS images, animations and other creative code stuff I love and try to make as often as possible.</p>
    <ul>
      <li><a href="https://codepen.io/loenko/full/wmMyxd/">My CSS Images showcase</a> - a kind of exhibition app for pure CSS images I made for #dailycssimages challenge</li>
      <li><a href="https://codepen.io/loenko/pen/GryzvMv">1</a> and <a href="https://codepen.io/loenko/pen/MJrRNP">2</a> - another couple of CSS-only coding examples</li>
    </ul>
  </div>
)

export default CodePage