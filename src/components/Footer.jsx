import React from 'react'
// import Guts from "./body/components/Guts";
import "./styles/footer.css"

import y from "./body/media/y.jpg";
import git from './media/git.svg'
import insta from './media/insta.svg'
import link from './media/linkedIn.svg'
import twitter from './media/twitter.svg'


const Footer = () => {
  return (
    <div id="social" className='footer' style={{ backgroundImage: `url(${y})` }}>
      <div className="socials">
        <div className="git" id='soc'><a href="https://github.com/R3tr0LastKnight"><img src={git} alt="" /></a></div>
        <div className="linked" id='soc'><a href="https://www.linkedin.com/in/shubh-shahu/"><img src={link} alt="" /></a></div>
        <div className="twitter" id='soc'><a href=""><img src={insta} alt="" /></a></div>
        <div className="insta" id='soc'><a href=""><img src={twitter} alt="" /></a></div>
      </div>
      <footer>
        <div className="copyright">Copyrighted &#169; 2023</div>
      
      </footer>
      
        
    </div>
    
  )
}

export default Footer