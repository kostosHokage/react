import React, { useEffect, useState } from "react";
import StateSquare from "./StateSquare";

export default function StateColor() {
  const [state, setState] = useState("black");

  return (
    <div>
      <StateSquare changeColor={setState} color={state} newColor="yellow" />
      <StateSquare changeColor={setState} color={state} newColor="green" />
      <StateSquare changeColor={setState} color={state} newColor="blue" />
    </div>
  );
}
