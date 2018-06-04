import React from "react";
import PropTypes from "prop-types";

export const TodoForm = props => (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.currentTodo}
        onChange={props.handleInputChange}
      />
    </form>
);
