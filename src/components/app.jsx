import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import '../style/style.scss';
import 'normalize.css';

import Header from './header';
import Container from './container';
import Home from './home';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Container>
          <Router>
            <Home  path="/" />
            <AsyncRoute  path="/about" getComponent={() => import('./about').then(module => module.default)} />
            <AsyncRoute path="/work" getComponent={() => import('./work').then(module => module.default)} />
            <AsyncRoute path="/contact" getComponent={() => import('./contact').then(module => module.default)} />
            </Router>
        </Container>
        <Footer/>
      </div>
    );
  }
}
