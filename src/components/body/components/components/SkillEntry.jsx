import React from "react";
import "../../styles/body.css";

const SkillEntry = (props) => {
  return (
    <div>
      <a
        target="blank"
        className="w-full flex justify-between hover:bg-white rounded-xl hover:text-black transition-none group "
        href={props.link}
      >
        <li className="skillElement  flex justify-between items-center !w-full ">
          <div className="skillName text-left w-3/4">{props.name}</div>
          <div className="grayscale  w-1/4 group-hover:grayscale-0">
            <img className="!w-full" src={props.img} alt="" />
          </div>
        </li>
      </a>
    </div>
  );
};

export default SkillEntry;
