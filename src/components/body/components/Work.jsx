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

const Work = () => {
  return (
    <div id="work" className="wonderOfYou"  >
      <h2 className="workTitle" >WORK</h2>
      <div className="setPieces" >
        <dl className="dictionary">{baroqueWorks.map(createEntry)}</dl>
      </div>
    </div>
  );
};

export default Work;
