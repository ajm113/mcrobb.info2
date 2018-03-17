import { h, Component } from 'preact';

import style from './style.scss';

export default class Parallax extends Component {

  render() {
    return (
      <div class={style.parallaxWapper}>
        <div class={style.parallax} />
      </div>
    );
  }
}
