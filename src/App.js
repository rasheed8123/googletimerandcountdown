import { useState } from 'react';
import './App.css';
import { StopWatch } from './components/stopwatch';
import { Timer } from './components/timer';

function App() {
  const [display, setDisplay] = useState(true);
  return (<div>
    <h1 className="h-tag">Timer And Stopwatch</h1>
    <div className="App">
      <div className="button-box">
        <button onClick={() => setDisplay(true)}>Timer</button>
        <button onClick={() => setDisplay(false)}>Stopwatch</button>
      </div>
      {
        display ?
          <div className="timer">
            <Timer />
          </div> :
          <div className="stopwatch">
            <StopWatch />
          </div>
      }
    </div>
    </div>
  );
}

export default App;