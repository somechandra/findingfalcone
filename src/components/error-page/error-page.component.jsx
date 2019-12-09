import React from "react";

import "./error-page.styles.css";

const ErrorPage = ({ error }) => {
  return (
    <div className="ErrorPage">
      <div className="error">Error!!</div>
      <div className="error">{error}</div>
    </div>
  );
};

export default ErrorPage;
