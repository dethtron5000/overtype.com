import './Main.css';
import Interference from '../components/Interference.js';
/*  <div className="modal-label">
      What&#39;s going on here?
    </div> */

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <h1 className="Main-title blu">Overtype</h1>
        <h1 className="Main-title purple">Overtype</h1>
      </header>
      <Interference
        width={window.innerWidth}
        height={window.innerHeight - 100}
      />
    </div>
  );
}

export default Main;
