import React from "react";
import "./entry.css";
import "../styles/skillsRes.css";

function Entry(props) {
  return (
    <div className="term">
      <a className="anchorP" target="blank" href={props.link}>
        <dt>
          <span className="preview" role="img" aria-label="img">
            <img src={props.img} alt="" />
          </span>
        </dt>
        <span className="title">{props.name}</span>
        <dd className="link">{props.desc}</dd>
      </a>
    </div>
  );
}

export default Entry;
