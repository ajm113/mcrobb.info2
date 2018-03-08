import { h } from 'preact';

import style from './style.scss';

export default () => {
    return (
        <div>
            <h1>Contact McRobb</h1>
            <p><i>Please use the contact form. -- I know it seems lazy, but I get enough spam.</i></p>
            <form action="https://formspree.io/andrewmcrobb@gmail.com" method="POST" class={style.myform}>
                <input type="text" name="name" placeholder="Your name" />
                <textarea name="message" placeholder="Your message"/>
                <input type="email" name="_replyto" placeholder="Your email address" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};
