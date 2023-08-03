import React from "react";
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
          <h2>-Skills-</h2>
          <div class="skillset">
            <ul className="ulSkills">{skillIssue.map(SkillEntry)}</ul>
          </div>
        </div>
        <div className="hobbiz">
          <div class="skillset">
            <h2>-Hobbies-</h2>
            <ul className="ulHobbies">{hobbyIssue.map(SkillEntry)}</ul>
          </div>
          <a
            href="https://drive.google.com/file/d/1AvcgKuBS_5zmRtQc1IJZU3uCOzrn04LQ/view?usp=sharing"
            target="blank"
          >
            <h2 className="resume">RESUME</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
