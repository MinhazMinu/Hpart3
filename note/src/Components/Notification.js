import React from "react";

const Notification = ({ massage }) => {
  if (massage === null) {
    return null;
  }

  return <div className="error">{massage}</div>;
};

export default Notification;
