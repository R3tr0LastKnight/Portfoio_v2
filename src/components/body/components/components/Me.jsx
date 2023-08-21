import React, { useEffect, useRef } from "react";
import "./me.css";
import "../styles/skillsRes.css";
import { motion, useInView, useAnimation } from "framer-motion";

const Me = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const effectControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      effectControls.start("visible");
    }
  }, [isInView, effectControls]);

  return (
    <div ref={ref} className="myInfo">
      <motion.div
        class="me"
        id="me"
        variants={{
          hidden: {
            y: 75,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        initial="hidden"
        // animate={effectControls}
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
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
          I will prove to be dedicated and innovative web developer with a
          passion for creating dynamic and engaging web applications. With my
          expertise in multiple technologies, I am well-equipped to tackle any
          challenge that comes my way and deliver solutions that exceed
          expectations.
        </p>
      </motion.div>
      <div className="leftRes">
        <a
          href="https://drive.google.com/file/d/1GtO6uwRMYjfVFKJOwhk4ZMGiZDWXshof/view?usp=sharing"
          target="blank"
        >
          <h3 className="resume">RESUME</h3>
        </a>
      </div>
    </div>
  );
};

export default Me;
