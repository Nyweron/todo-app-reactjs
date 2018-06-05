import React from "react";
import PropTypes from 'prop-types';

export const TodoItem = props => {
  return (
    <li>
       <span className="delete-item"><a href="#" onClick={props.handleRemove.bind(null, props.id)}>X</a></span>
      <input
        type="checkbox"
        onChange={props.handleToggle.bind(null, props.id)}
        defaultChecked={props.isComplete}
      />
      {props.name}
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool
}