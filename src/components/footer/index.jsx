import { h, Component } from 'preact';
import Container from '../container';

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <Container>
          <p>Want to checkout more of my work? Take a peak at how I code? Look at <a href="https://github.com/ajm113">GitHub</a> and <a href="https://codepen.io/ajm113/">Codepen</a>!</p>
          <p>You can <a href="https://github.com/ajm113/mcrobb.info2">look at this website's repo</a>!</p>
        </Container>
      </footer>
    );
  }
}
