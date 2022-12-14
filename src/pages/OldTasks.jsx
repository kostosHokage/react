import React, { StrictMode } from "react";
import "../App.css";
import { AddNumber, Square, State, StateColor } from "../components";

function OldTasks() {
  const fn = (x) => x + 5;
  const fn1 = (x) => x * 10;
  const fn2 = (x) => x + 223;
  const fn3 = (x) => x + 1;
  const fn4 = (x) => x / x;

  return (
    <React.StrictMode>
      <div>
        <Square />
        <AddNumber num={3} func={fn} />
        <AddNumber num={3.3} func={fn1} />
        <AddNumber num={-31} func={fn2} />
        <AddNumber num={2} func={fn3} />
        <AddNumber num={100} func={fn4} />
        <State />
        <StateColor />
      </div>
    </React.StrictMode>
  );
}

export default OldTasks;
