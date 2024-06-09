import React from "react";
// import Guts from "./body/components/Guts";
import "./styles/footer.css";
import "./styles/footerRes.css";

import y from "./body/media/y.jpg";
import git from "./media/git.svg";
import insta from "./media/insta.svg";
import link from "./media/linkedIn.svg";
import twitter from "./media/twitter.svg";

const Footer = () => {
  return (
    <div
      id="social"
      className="footer"
      style={{ backgroundImage: `url(${y})` }}
    >
      <div className="socials">
        <div className="git" id="soc">
          <a href="https://github.com/R3tr0LastKnight" target="blank">
            <img src={git} alt="" />
          </a>
        </div>
        <div className="linked" id="soc">
          <a href="https://www.linkedin.com/in/shubh-shahu/" target="blank">
            <img src={link} alt="" />
          </a>
        </div>
        <div className="twitter" id="soc">
          <a
            href="https://twitter.com/shubh_shahu?t=1tmTtZA-bEDMHU2KaPz8Qw&s=09"
            target="blank"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
        {/* <div className="insta" id='soc'><a href="https://instagram.com/retr0lastknight?igshid=ZDdkNTZiNTM=" target="blank"><img src={insta} alt="" /></a></div> */}
      </div>
    </div>
  );
};

export default Footer;
