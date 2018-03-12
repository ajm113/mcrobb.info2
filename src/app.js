import 'whatwg-fetch';
import 'babel-polyfill';
import 'promise-polyfill';

import { h, render } from 'preact';

require('file-loader?name=CNAME!./CNAME');

window.addEventListener('error', (e) => {
    let errorText = [
        e.message,
        'URL: ' + e.filename,
        'Line: ' + e.lineno + ', Column: ' + e.colno,
        'Stack: ' + (e.error && e.error.stack || '(no stack trace)')
    ].join('\n');

    // Example: log errors as visual output into the host page.
    // Note: you probably don’t want to show such errors to users, or
    //       have the errors get indexed by Googlebot; however, it may
    //       be a useful feature while actively debugging the page.
    const DOM_ID = 'rendering-debug-pre';
    if (!document.getElementById(DOM_ID)) {
        let log = document.createElement('pre');
        log.id = DOM_ID;
        log.style.whiteSpace = 'pre-wrap';
        log.textContent = errorText;
        if (!document.body) document.body = document.createElement('body');
        document.body.insertBefore(log, document.body.firstChild);
    } else {
        document.getElementById(DOM_ID).textContent += '\n\n' + errorText;
    }

});

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
  require('preact/devtools');   // turn this on if you want to enable React DevTools!
  module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
