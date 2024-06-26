import React, { useEffect, useState } from "react";
import "./styles/work.css";
import "./styles/skillsRes.css";
import Entry from "./components/Entry";
import baroqueWorks from "./baroqueWorks";
import TextTransition, { presets } from "react-text-transition";

function createEntry(piece) {
  return (
    <Entry
      key={piece.id}
      img={piece.img}
      name={piece.name}
      desc={piece.disc}
      link={piece.link}
    />
  );
}
// function copyText() {
//   navigator.clipboard.writeText("R3tr0LastKnight@gmail.com");
// }

const Work = () => {
  const TEXTS = ["Projects", "Tour De Force", "Magnum Opus", "Work"];
  // const TEXTS = ["Works", "Arbeiten", "仕事", "Работа"];
  // const TEXTS = [
  //   "Projects",
  //   "プロジェクト",
  //   "Progetti",
  //   "Проекты",
  //   "Proyectos",
  //   "परियोजनाओं",
  //   "Projekte",
  // ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="wonderOfYou flex flex-col">
      <div className="relative flex flex-col items-center justify-center  lg:px-8">
        <div id="work"></div>
        <h2 className="workTitle  px-6 !text-black min-w-[25rem] justify-center  ">
          {/* WORK
           */}
          <TextTransition
            className="flex justify-center text-black "
            style={{ color: "#000", textAlign: "center" }}
            // springConfig={presets.wobbly}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h2>
        <div className="setPieces">
          <dl className="dictionary  ">{baroqueWorks.map(createEntry)}</dl>
        </div>
      </div>
      <div className="contact  lg:mt-" id="contact">
        <div className="ask">
          <h1>Got a project?</h1>
          <h2>Big or Small Hit me up</h2>
        </div>
        <div className="emailButton">
          <a id="emilID" href="mailto:r3tr0LastKnight@gmail.com">
            R3tr0LastKnight@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
// onClick={copyText()}
