import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link href="/">McRobb</Link></h1>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}
