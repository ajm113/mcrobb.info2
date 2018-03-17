import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import '../style/style.scss';
import 'normalize.css';

import Parallax from './parallax';

import Header from './header';
import Container from './container';
import Home from './home';
import Footer from './footer';

import createHashHistory from 'history/createHashHistory';

export default class App extends Component {

    constructor()
    {
        super();

        this.state.currentUrl = '/';
    }

    handleRoute = e => {
        this.setState({
            currentUrl: e.url
        });
    };

    render() {
        return (
            <div id="app">
                <Header />
                <Parallax/>
                <Container>
                    <Router history={createHashHistory()} onChange={this.handleRoute}>
                        <Home  path="/" />
                        <AsyncRoute  path="/about" getComponent={() => import('./about').then(module => module.default)} />
                        <AsyncRoute path="/work" getComponent={() => import('./work').then(module => module.default)} />
                        <AsyncRoute path="/contact" getComponent={() => import('./contact').then(module => module.default)} />
                    </Router>
                </Container>
                <hr />
                <Footer/>
            </div>
        );
    }
}
