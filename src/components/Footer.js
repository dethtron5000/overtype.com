import React from 'react';
import './Footer.css';

const d = new Date();

function Footer() {
  return (
    <footer className="foot">
      <div className="copyright">
        &copy;
        {' '}
        { d.getFullYear() }
        {' '}
        Peter Olson Some Rights Reserved
      </div>
      <div className="contact">
        <a href="mailto:peter@overtype.com">Email</a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a
          href="https://www.linkedin.com/in/peterjolson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="http://dethtron5000.tumblr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tumblr
        </a>
        <a
          href="https://stackoverflow.com/users/1540902/dethtron5000?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>
        <a
          href="https://github.com/dethtron5000"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://zirk.us/@dethtron5000"
          // eslint-disable-next-line react/no-invalid-html-attribute
          rel="noopener noreferrer me"
          target="_blank"
        >
          Mastodon
        </a>
      </div>
    </footer>
  );
}

export default Footer;
