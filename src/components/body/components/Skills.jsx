import React from "react";
import imgs from "../media";

const Skills = () => {
  let skill = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "MongoDB",
    "Express",
    "React",
    "NodeJS",
  ];
  let hobby = [
    "WORKOUT",
    "ESPORTS",
    "READING",
    "MUSIC",
    "EXPLORATION",
    "VIDEOGAMES",
  ];

  return (
    <div class="body">
      <div id="aboutme"></div>
      <div
        class="me"
        id="me"
      >
        <h1>Shubh Shahu</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Ingenious Web-developer, striving to improvise his skillset.As a
          developer, I take pride in delivering high-quality, maintainable code
          that adheres to industry best practices. I am a team player who enjoys
          working collaboratively to achieve common goals, and I am always
          willing to go the extra mile to ensure that my clients or users are
          satisfied with the solutions I provide.
        </p>
        <p>
          Overall, I will prove to be dedicated and innovative web developer
          with a passion for creating dynamic and engaging web applications.
          With my expertise in multiple technologies and frameworks, I am
          well-equipped to tackle any challenge that comes my way and deliver
          solutions that exceed expectations.
        </p>
      </div>
      <div class="tools">
        <div className="skillz">
          <h2>-Skills-</h2>
          <div class="skillset">
            <ul className="ulSkills">
              {skill.map((sub) => {
                return (
                  <a target="blank" href= {`https://en.wikipedia.org/wiki/${sub}`} >
                    <li>
                    {sub}{" "}
                    <div className="skillImg">
                      <img
                        className=""
                        src={imgs[sub]}
                        alt=""
                      />
                    </div>
                    </li>
                  </a>
                  
                );
              })}
            </ul>
          </div>
        </div>
        <div className="hobbiz">
          <div class="skillset">
            <h2>-Hobbies-</h2>
            <ul className="ulSkills">
              {hobby.map((sub) => {
                return (
                  // <a target="blank" href= {`https://www.google.com/search?q=${sub}`} >
                  <li>
                    {sub}{" "}
                    <div className="hobbImg">
                      <img
                        className=""
                        src={imgs[sub]}
                        alt=""
                      />
                    </div>
                    </li>
                    // </a>
                );
              })}
            </ul>
          </div>
          <a href="https://drive.google.com/file/d/1BunyehKm2TRkWr2LHF8M2w8VMyZq8tEb/view?usp=sharing" target="blank" >
            <h2 className="resume"  >RESUME</h2>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
