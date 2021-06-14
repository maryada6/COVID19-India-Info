import React from "react";
const Error = () => {
  return (
    <div className="center-flex">
      <img
        className="errorimg"
        src={window.location.origin + "/error.png"}
        alt=""
      />
    </div>
  );
};

export default Error;
