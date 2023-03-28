import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [currentTime, setcurrentTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  const intervalRefrence = useRef(null);

  function start() {
    if (!currentTime) {
      setcurrentTime(true);
      intervalRefrence.current = setInterval(() => {
        setcurrentTime((prevtime) => prevtime + 10);
      }, 10);
    }
  }

  function stop() {
    clearInterval(intervalRefrence.current);
    setIsStopwatchRunning(false);
  }

  function reset() {
    clearInterval(intervalRefrence.current);
    setIsStopwatchRunning(false);
    setcurrentTime(0);
  }

  function formatTime(timesInMilliSeconds) {
    const minutes = Math.floor(timesInMilliSeconds / 60000);
    const second = Math.floor((timesInMilliSeconds % 60000) / 1000);
    const millisec = Math.floor((timesInMilliSeconds % 1000) / 10);
    //console.log(minutes, second);

    return `${minutes.toString().padStart(2, "0")} : ${second
      .toString()
      .padStart(2, "0")} : ${millisec.toString().padStart(2, "0")}`;
  }

  return (
    <div className="App">
      <h2>Stopwatch App</h2>

      <h1>{formatTime(currentTime)}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
