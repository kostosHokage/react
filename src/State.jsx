import React, { useState } from "react";

export default function State() {
  const [state, setState] = useState(true);
  // eslint-disable-next-line no-console
  console.log(state);

  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={() => setState(false)} className="button">
      Click me, i show to u my state - {state}!
    </button>

    if (state === true) {
      console.log('hello')
    } else {
      console.log('bye')
    }
  );
}
