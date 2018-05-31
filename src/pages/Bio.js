import React from 'react';
import './Bio.css';
import Venn from '../components/Venn';

const Bio = () => (
  <div className="bio wrapper">
    <h2>Hi.</h2>
    <h3>I'm Peter.</h3>
    <p>I am passionate about using technology and data as a tool for storytelling, insight, communication, and understanding.  </p>
    <h3>What I do.</h3>
    <p>I create technology products that enable people to navigate complex systems, foster empathy at scale, drive organizational innovation and ignite cultural change.</p>
    <Venn />
    
    <h3>Where I'm at. Where I've been.</h3>
    <p>I’m currently a director of technology for content systems and APIs at <a href="http://nbcnews.com/" target="_blank" rel="noopener noreferrer">NBC News Digital</a>.</p>
    <p>In the past I was a director and creative technologist at <a href="https://www.ideo.com" target="_blank" rel="noopener noreferrer">IDEO</a>, focusing on the intersection of design and technology to launch new products and change big systems.</p>
    <p>I helped start the Digital Media Group at <a href=
    "https://marvel.com"  target="_blank" rel="noopener noreferrer">Marvel Entertainment</a> and created things like the first digital comics program backed by the comic industry, the first developer program in the comics industry, and used graph theory to understand the complexities of the Marvel Universe.</p>
	</div>
);

export default Bio;
