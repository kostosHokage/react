import React, { useEffect, useState } from "react";

export default function State() {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);

  const array = [];

  useEffect(() => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < count; i++) {
      array.push("Hello!");
    }
    // eslint-disable-next-line no-console
    console.log(array);
  });

  // eslint-disable-next-line no-console

  return (
    // eslint-disable-next-line react/button-has-type
    <div>
      <button type="button" onClick={() => setState(!state)} className="button">
        Click me, i show u box!
      </button>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="button"
      >
        Add new object to array
      </button>
      {!state ? <div className="square" /> : null}
    </div>
  );
}
