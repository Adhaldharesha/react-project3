import { useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    
  };

  const reset = () => {
    setSeconds(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>

      <h2>{seconds} seconds</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;