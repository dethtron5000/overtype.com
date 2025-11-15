import './Main.css';
import Interference from '../components/Interference.js';
import { useMeasure } from "@uidotdev/usehooks";

function Main() {

  const [metricref, { width }] = useMeasure();
  const [containerref, {height}] = useMeasure();

  return (
    <div className="main-container" ref={containerref}>	  
      <div className="main" ref={metricref}>
        <Interference
          width={width}
          height={height}
        />
        <header className="main-header">
          <h1 className="main-title blu">Overtype</h1>
          <h1 className="main-title purple">Overtype</h1>
        </header>
      </div>
    </div>
  );
}

export default Main;
