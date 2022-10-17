import React, { useEffect, useState } from "react";

export default function State() {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("Hello from useEffect");
  }, [state]);

  // eslint-disable-next-line no-console

  return (
    // eslint-disable-next-line react/button-has-type
    <div>
      <button type="button" onClick={() => setState(!state)} className="button">
        Click me, i show u box!
      </button>
      {!state ? <div className="square" /> : null}
    </div>
  );
}
