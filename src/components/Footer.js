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
        <a href="https://bsky.app/profile/overtype.com" target="_blank" rel="noopener noreferrer">Bluesky</a>
        <a
          href="https://www.linkedin.com/in/peterjolson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
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
      </div>
    </footer>
  );
}

export default Footer;
