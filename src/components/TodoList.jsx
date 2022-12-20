import React from "react";
import { TextInput, Button } from "@mantine/core";
import { Todo } from "../pages";

export default function TodoList() {
  return (
    <div className="container column">
      <h1>Todo List!</h1>
      <div className="todo">
        <form className="todo_form">
          <TextInput label="Введите название поста" placeholder="Text" />
          <Button ml="10px">Опубликовать</Button>
        </form>
        <div className="todo_list">
          <Todo />
        </div>
      </div>
    </div>
  );
}
