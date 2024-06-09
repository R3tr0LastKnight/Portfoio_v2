import React from "react";
import "./styles/body.css";
import "./styles/bodyRes.css";
import Guts from "./components/Guts";
import Skills from "./components/Skills";
import Work from "./components/Work";
import X from "./media/x.jpg";
import z from "./media/z.jpg";
import RetroGrid from "../magicui/retro-grid.tsx";
import ScrambleAnimation from "react-scrambled-text/dist/src/ScrambleAnimation";

const Body = () => {
  return (
    <div className="all mt-16">
      <div></div>
      <div className="h-[69vh] relative">
        <ScrambleAnimation
          texts={["welcome to shubh's portfolio", "shubh.is-a.dev"]}
          speed={100}
          pauseDuration={2000}
          start={true}
          className="pointer-events-none z-10 absolute w-full flex justify-center top-32  !text-white  !text-5xl font-bold leading-none tracking-tighter font-Major "
        />
        {/* <span className="pointer-events-none z-10 absolute left-[25%] top-16 text-white  text-7xl font-bold leading-none tracking-tighter font-Major ">
          
        </span> */}
        <RetroGrid />
      </div>

      <Skills />
      <Guts src={z} />
      <Work />
    </div>
  );
};

export default Body;
