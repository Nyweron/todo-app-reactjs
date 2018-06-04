import React from "react";

export const TodoItem = props => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={props.handleToggle.bind(null, props.id)}
        defaultChecked={props.isComplete}
      />
      <span>{props.name}</span>
    </li>
  );
};
