import React, { useState } from "react";

export default function State() {
  const [state, setState] = useState(false);
  // eslint-disable-next-line no-console
  console.log(state);
  return (
    // eslint-disable-next-line react/button-has-type
    <div>
      <button
        onClick={() => {
          if (!state) {
            setState(true);
          } else {
            setState(false);
          }
        }}
        className="button"
      >
        Click me, i show u box!
      </button>
      {!state ? <div className="square" /> : null}
    </div>
  );
}
