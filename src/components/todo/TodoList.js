import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = props => {
  return (
    <div className="Todo-list">
      <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} {...todo} handleToggle={props.handleToggle} />
        ))}
      </ul>
    </div>
  );
};
