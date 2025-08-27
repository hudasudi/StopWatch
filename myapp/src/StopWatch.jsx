import React,{useState,useEffect,useRef} from "react";

function StopWatch(){

  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalIDRef = useRef(null);
  const timeStamp = useRef(0);

  useEffect(() => {

  }, [isRunning]);

  function start(){

  }
  function stop(){

  }
  function reset(){

  }
  function formatTime(){
    return`00:00:00`;
  }

  return(<div className="stopwatch">
           <div className="display">{formatTime()}</div>
           <div className="controls">
              <button onClick={start} className="start-btn">Start</button>
              <button onClick={stop} className="stop-btn">Stop</button>
              <button onClick={reset} className="reset-btn">Reset</button>
           </div>
         </div>);
}
export default StopWatch;