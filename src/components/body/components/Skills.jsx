import React, { useEffect, useState } from "react";
import "./styles/skillsRes.css";
import SkillEntry from "./components/SkillEntry";
import skillIssue from "./skillIssue";
import hobbyIssue from "./hobbyIssue";
import Me from "./components/Me";
import "../styles/body.css";

const Skills = () => {
  return (
    <div className="body relative w-full flex py-8">
      <div className="w-[60%]">
        <div id="aboutMe" className="" />
        <Me />
      </div>

      <div className="w-[40%] tools">
        <div>
          <h2 className="w-full whitespace-nowrap">-Skills-</h2>
          <div className="grid  grid-cols-2 text-sm  gap-x-16">
            {skillIssue.map(SkillEntry)}
          </div>
        </div>

        {/* <div className="hobbiz">
          <div class="skillset">
            <h2>-Hobbies-</h2>
            <ul className="ulHobbies">{hobbyIssue.map(SkillEntry)}</ul>
          </div>
          <div className="rightRes">
            <a
              href="https://drive.google.com/file/d/1GtO6uwRMYjfVFKJOwhk4ZMGiZDWXshof/view?usp=sharing"
              target="blank"
            >
              <h2 className="resume">RESUME</h2>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
