import React from "react";

export const TodoItem = props => (
  <div>
    <input type="checkbox" defaultChecked={props.isComplete} />
    <span>{props.name}</span>
  </div>
);
