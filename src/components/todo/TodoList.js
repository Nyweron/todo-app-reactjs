import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          <TodoItem key={todo.id} {...todo} />
        </li>
      ))}
    </ul>
  );
};
