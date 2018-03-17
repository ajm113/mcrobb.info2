import { h } from 'preact';
import RepoList from '../repoList';

export default () => {
  return (
    <div>
      <h1 class="title">Commercial Projects / Employeers</h1>
      <hr />
      <h3>Axion Communications - Software Developer</h3>
      <i>October 2017 - Current</i>
      <ul>
        <li>FreeSwitch, Nginx, MariaDB, Ejabberd</li>
        <li>Documentation and Technical Writing</li>
        <li>C, Lua, PHP, Go, Erlang, JavaScript, Composer</li>
        <li>jQuery, CSS, Sass, Webpack, Strophe.js, ES2015, Preact/React</li>
        <li>CentOS 7, Debian, Docker, Vagrant, Virtualbox.</li>
        <li>Source version control using Git and Bitbucket.</li>
      </ul>
      <h3>NextBee, Remote - Sr. Developer</h3>
      <i>June 2017 - September 2017</i>
      <ul>
        <li>Customer / Client Service</li>
        <li>Training Clients of CMS.</li>
        <li>Management of Teams</li>
        <li>Documentation and Technical Writing.</li>
        <li>Code Analysis / Quality Assurance.</li>
        <li>Source version control using CloudForge and SVN.</li>
        <li>Cordova/Phonegap for Android and iOS using Node.js</li>
        <li>PHP, Yii, jQuery, CSS, HTML, Framework7, AngularJS</li>
      </ul>

      <h3>Payroll Management - Web Developer</h3>
      <i>May 2015 - June 2017</i>
      <ul>
        <li>Strong PHP usage using object oriented principles in an MVC framework using Laravel, and Lightvc.</li>
        <li>Bootstrap, HTML, CSS, JavaScript / AJAX using jQuery, Video.js, React.js.</li>
        <li>Source version control using Git and GitHub.</li>
        <li>Documentation and Technical Writing.</li>
        <li>Code Analysis / Quality Assurance.</li>
        <li>Build automation using Node.JS; Grunt/Gulp; compiling Sass/Less files into CSS</li>
        <li>Nginx server configuration and small system administration tasks.</li>
        <li>Photoshop and design skills.</li>
      </ul>

      <h3>Fabcom Marketing - Web Developer</h3>
      <i>November 2014 - May 2015</i>
      <ul>
        <li>Strong PHP usage in WordPress, Expression Engine, and CodeIgniter.</li>
        <li>Source version control using Git and GitHub.</li>
        <li>Documentation and Technical Writing.</li>
        <li>API integration: Twitter, Facebook, LinkedIn, Google, Open Tilt, Spark Platform.</li>
        <li>Bootstrap, HTML, CSS, JavaScript / AJAX using jQuery.</li>
        <li>Photoshop and design skills.</li>
      </ul>

      <h2>... And many more!</h2>
      <h1 class="title">Open Source Projects</h1>
      <hr />
      <p>
        <i>Everything from small old pieces of code to larger newer projects!</i>
      </p>
      <RepoList/>
    </div>
  );
};
