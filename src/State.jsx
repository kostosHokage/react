import React, { useEffect, useState } from "react";

export default function State() {
  const [state, setState] = useState(false);
  const [count, setCount] = useState([]);

  useEffect(() => {
    setCount([...count, "hello!"]);
    console.log(count);
  }, [state]);

  useEffect(() => {
    console.log("я родился");
  }, []);

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
