import React from 'react';
import './Main.css';
import Interference from '../components/Interference';
/*  <div className="modal-label">
      What&#39;s going on here?
    </div> */

const Main = () => (
  <div className="Main">
    <header className="Main-header">
      <h1 className="Main-title blu">Overtype</h1>
      <h1 className="Main-title purple">Overtype</h1>
    </header>
    <Interference width={window.innerWidth} height={(window.innerHeight - 40)} />
  </div>);

export default Main;
