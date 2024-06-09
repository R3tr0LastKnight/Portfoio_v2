import React, { useEffect, useState } from "react";
import "./styles/nav.css";
import "./styles/navRes.css";
import TextScramble from "@dilrukr/react-text-scramble";
import ScrambleAnimation from "react-scrambled-text/dist/src/ScrambleAnimation";

const Nav = () => {
  const [displayText, setDisplayText] = useState("");
  const [nav, setNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 0 ? setNav(true) : setNav(false);
    window.scrollY <= 200 ? setNav(false) : setNav(true);
  };
  window.addEventListener("scroll", changeNav);
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
    <nav
      className={`text-white fixed top-0 flex justify-between bg-black w-full z-50 ${
        nav ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="text-white bg-white py-2 !h-full flex items-center  px-8 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ScrambleAnimation
          texts={["R3tr0"]}
          speed={100}
          pauseDuration={2000}
          start={true}
          className=""
        />
      </div>
      {/* <h1>{displayText}</h1> */}
      <ul className="flex gap-4">
        <li>
          <a href="#aboutMe">About</a>
        </li>
        <li>
          <a href="#work">work</a>
        </li>
        <li>
          <a href="#social">Socials</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
