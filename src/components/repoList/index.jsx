import { h, Component } from 'preact';

const SEARCH = '//api.github.com/users/ajm113/repos?sort=updated';

import style from './style.scss';

const Result = ({ result }) => (
    <div>
        <a href={result.html_url} class={style.title} target="_blank">
                    {result.full_name}
                </a>
                🌟<strong>{result.stargazers_count}</strong>
        <p class={style.description}>{result.description}</p>
    </div>
);

export default class RepoList extends Component {

    async componentDidMount() {
        let res = await fetch(SEARCH),
            json = await res.json();

        let results = [];

        for (let i = 0; i< json.length; i++)
        {
            if (!json[i].stargazers_count > 0)
                continue;

            results.push(json[i]);
        }

        this.setState({ results });
    }

    render({}, {results = []}) {
        return (
            <div>
                { results.map( result => (
                    <Result result={result} />
                )) }
            </div>
        );
    }
}
