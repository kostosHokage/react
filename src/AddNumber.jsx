import React from "react";
import PropTypes from "prop-types";

export default function AddNumber(props) {
  const { func, num } = props;

  AddNumber.propTypes = {
    num: PropTypes.number.isRequired,
    func: PropTypes.func.isRequired,
  };

  return (
    <>
      {func(num)}
      <br />
    </>
  );
}
