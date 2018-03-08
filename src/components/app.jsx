import { h, Component } from 'preact';
import { Router } from 'preact-router';

import '../style/style.scss';
import 'normalize.css';

import Header from './header';
import Container from './container';
import Home from './home';
import About from './about';
import Work from './work';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Container>
          <Router>
            <Home  path="/" />
            <About  path="/about" />
            <Work path="/work" />
            <Contact path="/contact" />
            </Router>
        </Container>
      </div>
    );
  }
}
