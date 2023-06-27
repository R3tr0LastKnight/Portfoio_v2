import React from "react";
import "./styles/body.css";
import Guts from "./components/Guts";
import Skills from "./components/Skills";
import Work from "./components/Work";
import X from "./media/x.jpg";
import z from "./media/z.jpg";

const Body = () => {
  return (
    <div>
      <Guts src={X} />
      <Skills />
      <Guts src={z} />
      <Work />
    </div>
  );
};

export default Body;
