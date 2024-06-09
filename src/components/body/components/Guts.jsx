import React from "react";
import "../styles/body.css";

const Guts = (props) => {
  return (
    <div className="guts h-[50vh] ">
      <img src={props.src} alt="R3tr0LastKnight" />
    </div>
  );
};

export default Guts;
