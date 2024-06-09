import React, { useEffect, useState } from "react";
import "./styles/nav.css";
import "./styles/navRes.css";
import TextScramble from "@dilrukr/react-text-scramble";
import ScrambleAnimation from "react-scrambled-text/dist/src/ScrambleAnimation";

const Nav = () => {
  const [displayText, setDisplayText] = useState("");

  const text = "R3tr0";

  useEffect(() => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const typingDelay = 50; // Adjust the typing delay as needed
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, getRandomInt(100, 300)); // Adjust the random range for a more natural typing effect
      }
    };

    // Set timeout to start typing after 2 seconds
    const timeoutId = setTimeout(() => {
      typeText();
    }, 500);

    // Cleanup function to clear timeout if component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <nav className="text-white">
      <ScrambleAnimation
        texts={["R3tr0"]}
        speed={100}
        pauseDuration={2000}
        start={true}
        className="text-white bg-white h-full flex items-center"
      />
      {/* <h1>{displayText}</h1> */}
      <ul>
        <li>
          <a href="#social">Socials</a>
        </li>
        <li>
          <a href="#work">work</a>
        </li>
        <li>
          <a href="#aboutMe">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
