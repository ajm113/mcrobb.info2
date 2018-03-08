import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.scss';

export default class Header extends Component {

  pickRandomHeadline() {
    const randomHeadlines = [
      'NOW with 5% less caffine!',
      'Accepts chocolate chip cookies as payment!',
      'This site also works offline!',
      '100% Linux User!',
      'NOW accepts paper napkins of ideas!',
      'Keeps a scratched up copy of Windows 7!'
    ];

    return randomHeadlines[Math.floor(Math.random()*randomHeadlines.length)];
  }

  render() {

    const randomHeadline = this.pickRandomHeadline();

    return (
      <header>
        <h1><Link href="/"/></h1>
        <span class={style.headline}>{randomHeadline}</span>
        <nav>
          <Link activeClassName="active" href="/about">About</Link>
          <Link activeClassName="active" href="/work">Work</Link>
          <Link activeClassName="active" href="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}
