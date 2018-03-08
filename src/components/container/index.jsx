import { h, Component } from 'preact';

import style from './style.scss';

export default class Container extends Component {

  render(props) {
    return (
      <div class={style.container}>{ props.children }</div>
    );
  }
}
