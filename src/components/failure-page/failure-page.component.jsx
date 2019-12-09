import React from "react";

import "./failure-page.styles.css";

const FailurePage = ({ failedMsg }) => {
  return (
    <div className="FailurePage">
      <div className={"failed failedTitleColor"}>Failed!</div>
      <div className={"failed"}>{failedMsg}</div>
    </div>
  );
};

export default FailurePage;
