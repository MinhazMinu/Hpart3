import React from "react";

const Notification = ({ massage, type }) => {
  if (massage == null) return null;
  return (
    <div>
      <h3 className={type == "error" ? "error" : "success"}>{massage}</h3>
    </div>
  );
};

export default Notification;
