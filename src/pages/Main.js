import React from 'react';
import './Main.css';
import Interference from '../components/Interference';

const Main = () => (
  <div className="Main">
    <header className="Main-header">
      <h1 className="Main-title blu">Overtype</h1>
      <h1 className="Main-title purple">Overtype</h1>
    </header>
    <Interference width={window.innerWidth} height={window.innerHeight} />
  </div>);

export default Main;
