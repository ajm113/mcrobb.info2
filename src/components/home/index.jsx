import { h } from 'preact';
import { Link } from 'preact-router/match';

export default () => {
    return (
        <div>
            <h1 class="title">Everything Andrew McRobb</h1>
            <hr />
            <p><i>
                Everything software! Front-end, back-end, DevOps, System Admin, Photographer, Newbie Car Repair Guy!
            </i></p>
            <p>
                Welcome, this is just a little portfolio about myself and my work! I'm a remote developer who works on a bit of everything you can think of!
                PHP, JavaScript, GoLang, Erlang, Node.js, and many more!
            </p>
            <p>
                If you are a employeer. How about you checkout <Link href="/work">my work</Link>!
            </p>

        </div>
    );
};
