import React from "react";
import './styles/entry.css'

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="preview" role="img" aria-label="img">
          <a href={props.link}><img src={props.img} alt="" /></a>
        </span>
      </dt>
        <span className="title">{props.name}</span>
      <dd className="link">{props.desc}</dd>
    </div>
  );
}

export default Entry;