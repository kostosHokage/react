import React from "react";
import PropTypes from "prop-types";

export default function StateSquare(props) {
  // const { changeColor, color, newColor } = props;

  StateSquare.propTypes = {
    changeColor: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    newColor: PropTypes.string.isRequired,
  };

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <div
      className="square1"
      /* eslint-disable-next-line react/destructuring-assignment */
      style={{ backgroundColor: props.color, width: 300, height: 300 }}
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <button type="button" onClick={() => props.changeColor(props.newColor)}>
        Click me
      </button>
    </div>
  );
}
