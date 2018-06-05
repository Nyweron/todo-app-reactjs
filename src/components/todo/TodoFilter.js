import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const TodoFilter = () => {
  return (
    <Router>
      <div className="TodoFilter">
        <Link to="/">All</Link> {" "}
        <Link to="/Active">Active</Link>{" "}
        <Link to="/Complete">Complete</Link>
      </div>
    </Router>
  );
};
