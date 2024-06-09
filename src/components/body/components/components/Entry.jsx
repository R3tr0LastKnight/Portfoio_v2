import React from "react";
import "./entry.css";
import "../styles/skillsRes.css";
import StaggerText from "react-stagger-text";

function Entry(props) {
  return (
    <div className="term transition-all group">
      <a
        className="anchorP min-h-[18rem] gap-8 relative"
        target="blank"
        href={props.link}
      >
        <dt>
          <span
            className="preview w-full min-h-[20rem] "
            role="img"
            aria-label="img"
          >
            <img className="h-full w-full" src={props.img} alt="" />
          </span>
        </dt>
        <div className=" bottom-20 px-8">
          <span className="title relative  ">{props.name}</span>

          {/* <dd className="link text-justify">
            <StaggerText staggerType="word" staggerDuration={0.25}>
              {props.desc}
            </StaggerText>
          </dd> */}
        </div>
      </a>
    </div>
  );
}

export default Entry;
