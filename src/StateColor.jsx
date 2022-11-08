import React, { useEffect, useState } from "react";
import StateSquare from "./StateSquare";

export default function StateColor() {
  const [state, setState] = useState("black");

  return (
    <div>
      <StateSquare />
      <StateSquare />
      <StateSquare />
    </div>
  );
}
