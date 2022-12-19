import React, { useState } from "react";
import { TodoForm } from "../components";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTask = () => {};
  const removeTask = () => {};
  const handleToggle = () => {};

  return (
    <div>Количество задач: {todos.length}</div>
    <TodoForm />
  );
}
