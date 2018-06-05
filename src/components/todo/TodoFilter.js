import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const TodoFilter = (props) => {
  return (
    <Router>
      <div onClick={props.handleCurrentPath} className="TodoFilter">
        <Link to="/">All</Link> {" "}
        <Link to="/active">Active</Link>{" "}
        <Link to="/complete">Complete</Link>
      </div>
    </Router>
  );
};
