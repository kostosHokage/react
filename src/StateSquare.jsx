import React, { useEffect, useState } from "react";

export default function StateSquare(props) {
  return (
    <div className="square">
      <button
        type="button"
        onClick={(element) => {
          // eslint-disable-next-line react/destructuring-assignment,no-param-reassign,react/prop-types
          element.style = { backgroundColor: props.color };
        }}
      >
        Click me
      </button>
    </div>
  );
}
