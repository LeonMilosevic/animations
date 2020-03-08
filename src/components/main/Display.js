import React from "react";
import img from "../../assets/machine.jpg";

const Display = () => {
  return (
    <div className="full-screen">
      <img className="display-img" src={img} alt="" />
    </div>
  );
};

export default Display;
