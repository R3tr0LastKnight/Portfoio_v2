import React, { useEffect, useState } from "react";
import "./styles/nav.css";
import "./styles/navRes.css";

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

    typeText();

    // Cleanup function to clear timeout if component unmounts
    return () => {
      clearTimeout();
    };
  }, [text]);

  return (
    <nav>
      <h1>{displayText}</h1>
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
