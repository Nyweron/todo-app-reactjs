import React from "react";

export const TodoItem = props => (
  <li>
    <input
      type="checkbox"
      onChange={props.handleToggle(props.id)}
      defaultChecked={props.isComplete}
    />
    <span>{props.name}</span>
  </li>
);
