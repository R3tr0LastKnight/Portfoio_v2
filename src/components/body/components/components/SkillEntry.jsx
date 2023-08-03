import React from "react";
import "../../styles/body.css";

const SkillEntry = (props) => {
  return (
    <div>
      <a target="blank" href={props.link}>
        <li className="skillElement">
          {props.name}{" "}
          <div className="skillImg">
            <img className="" src={props.img} alt="" />
          </div>
        </li>
      </a>
    </div>
  );
};

export default SkillEntry;
