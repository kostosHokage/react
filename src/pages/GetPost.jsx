import React, { useState } from "react";

export default function GetPost() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const getPost = (id, state) => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => state(data));
    }
  };

  function submit(e, id, state) {
    if (id) {
      e.preventDefault();
      getPost(id, state);
    }
  }

  return (
    <div className="container">
      <form>
        <input
          className="input"
          type="number"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <button
          className="button"
          type="submit"
          onClick={(e) => submit(e, value, setItems)}
        >
          Показать пост
        </button>
      </form>
      <div className="post" key={items.id}>
        <div className="post__title">
          <b>Название: </b>
          {items.title}
        </div>
        <div className="post__content">{items.body}</div>
      </div>
    </div>
  );
}
