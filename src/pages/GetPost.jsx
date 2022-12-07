import React, { useState } from "react";
import { Post } from "../components";

export default function GetPost() {
  const [items, setItems] = useState();
  const [sense, setSense] = useState("");

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
            setSense(event.target.value);
          }}
          value={sense}
        />
        <button
          className="button"
          type="submit"
          onClick={(e) => submit(e, sense, setItems)}
        >
          Показать пост
        </button>
      </form>
      {items ? (
        <Post
          key={items.id}
          title={items.title}
          body={items.body}
          id={items.id}
        />
      ) : (
        <span />
      )}
    </div>
  );
}
