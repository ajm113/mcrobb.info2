import 'whatwg-fetch';
import 'promise-polyfill';

import { h, render } from 'preact';

// SEO and GitHub Pages Stuff
require('file-loader?name=CNAME!./CNAME');
require('file-loader?name=robots.txt!./robots.txt');


let root;
function init() {
  let App = require('./components/app').default;
  root = render(<App />, document.body, root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
  require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
  //require('preact/devtools');   // turn this on if you want to enable React DevTools!
  module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
