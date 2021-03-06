import { h } from 'preact';

import style from './style.scss';

export default () => {
    return (
        <div>
            <h1 class="title">Contact McRobb</h1>
            <hr />
            <p><i>Please use the contact form.</i></p>
            <form action="https://formspree.io/andrewmcrobb@gmail.com" method="POST" class={style.myform}>
                <input type="text" name="name" placeholder="Your name" equired="required" />
                <input name="message" placeholder="Your message" maxlength="300" required="required" />
                <input type="email" name="_replyto" placeholder="Your email address" equired="required" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};
