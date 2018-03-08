import { h } from 'preact';
import RepoList from '../repoList';

export default () => {
  return (
    <div>
      <h1>Open Source Work</h1>
      <p>
        <i>Everything from small old pieces of code to larger newer projects!</i>
      </p>
      <RepoList/>
    </div>
  );
};
