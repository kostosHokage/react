import React, { Children } from "react";
import { PropTypes } from "prop-types";

export default function Post(props) {
  Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };

  return (
    // eslint-disable-next-line react/destructuring-assignment
    <div className="post" key={props.id}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <div className="post__title">{props.title}</div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <div className="post__content">{props.body}</div>
    </div>
  );
}
