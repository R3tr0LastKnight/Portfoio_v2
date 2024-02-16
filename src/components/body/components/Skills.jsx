import React, { useEffect, useState } from "react";
import "./styles/skillsRes.css";
import SkillEntry from "./components/SkillEntry";
import skillIssue from "./skillIssue";
import hobbyIssue from "./hobbyIssue";
import Me from "./components/Me";
import "../styles/body.css";

const Skills = () => {
  return (
    <div class="body">
      <div>
        <div id="aboutMe" />
        <Me />
      </div>

      <div class="tools">
        <div className="skillz">
          <div class="skillset">
            <h2>-Skills-</h2>
            <ul className="ulSkills">{skillIssue.map(SkillEntry)}</ul>
          </div>
        </div>
        <div className="hobbiz">
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
