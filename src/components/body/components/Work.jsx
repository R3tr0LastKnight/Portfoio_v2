import React from "react";
import "./styles/work.css";
import Entry from "./Entry";
import baroqueWorks from "./baroqueWorks";

function createEntry(piece) {
  return (
    <Entry
      key={piece.id}
      img={piece.img}
      name={piece.name}
      desc={piece.disc}
      link={piece.link}
    />
  )
}
function copyText() {
  navigator.clipboard.writeText("R3tr0LastKnight@gmail.com");
}

const Work = () => {
  return (
    <div className="wonderOfYou"  >
      <div id="work"></div>
      <h2 className="workTitle" >WORK</h2>
      <div className="setPieces"  >
        <dl className="dictionary">{baroqueWorks.map(createEntry)}</dl>
      </div>
      <div className="contact" id="contact">
        <div className="ask">
          <h2>Got a project?</h2>
          <h2>Big or Small Hit me up</h2>
        </div>
        <div className="emailButton" onClick={copyText()}>
          <a href="mailto:shubh14shahu@gmail.com" >R3tr0LastKnight@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Work;
