import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Page not found...</h2>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default NotFound;
