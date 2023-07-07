import React from "react";
import "./styles/nav.css";
import "./styles/navRes.css";

const Nav = () => {
  return (
    <nav>
      <h1>R3rt0</h1>
      <ul>
        <li>
          <a href="#social">Socials</a>
        </li>
        <li >
          <a href="#work">work</a>
        </li>
        <li>
          <a href="#aboutme">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
