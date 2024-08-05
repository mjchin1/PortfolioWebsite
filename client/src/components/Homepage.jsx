import headshot2 from '../assets/headshot2.png';
import gracehopper from '../assets/gracehopper.png';
import JS from '../assets/JS.png';
import Postgres from '../assets/Postgres.png';
import React from '../assets/React.png';
import Express from '../assets/Express.png';
import Node from '../assets/Node.png';
import CSS from '../assets/CSS.png';
import Redux from '../assets/Redux.png';
import HTML from '../assets/HTML.png';
import { Link } from 'react-router-dom';


export default function Homepage() {

  function scrollToTop() {
    window.scroll(0,0);
  };

  return(

   <div>
    <br/> <br/> <br/>
    <div className="intro">
    <div className="introBlock">
    <h1>Hi, I'm Melissa. </h1>
    <p className="introText">I’m a full-stack software engineer based in Chicago, IL. As a former artist and creative director, I’m passionate about using a design-centered approach to build applications that are both beautiful and user-friendly. 
    </p>
    </div>
    <div className="introBlock">
    <img className="headshot" src={headshot2}></img>
    </div>

    </div> <br/> <br/>


    <h1 className="aboutSection">About Me</h1>

    <p className="homepageText">What I love about coding is that it allows me to draw from so many of the skills that I developed during my journey as a creative entrepreneur. Being a software engineer is very similar to being an artist: both require you to have the creative vision to build dynamic projects from scratch, a passion for perfecting small details, and the drive to push yourself into unfamiliar territory so that you can grow in your craft. My experience with planning and executing creative projects has shaped my holistic approach to building applications, and I love that being a software engineer allows me to use my creativity to produce tools that can make our everday experiences more exciting.</p> <br/> <br/>

    <div className="shortBreakline"></div> <br/>

    <h1 className="aboutSection">Skills, Languages & Technologies </h1>

    <p className="homepageText"> Full-Stack Development · Front-End Web
    Development · Back-End Web Development · REST API Development · Asynchronous Programming</p>

    <div className="languageIcons">

    <div className="iconBlock">
      <img className="icon" src={JS}/>
      <p className="iconText">JavaScript</p>
    </div>

    <div className="iconBlock">
      <img className= "icon react" src={React}/>
      <p className="iconText">React</p>
    </div>

    <div className="iconBlock">
      <img className= "icon" src={Postgres}/>
      <p className="iconText">PostgreSQL</p>
    </div> 
  
    <div className="iconBlock">
      <img className= "icon express" src={Express}/>
      <p className="iconText">Express</p>
    </div>

    <div className="iconBlock">
      <img className= "icon node" src={Node}/>
      <p className="iconText">Node</p>
    </div>

    <div className="iconBlock">
      <img className= "icon css" src={CSS}/>
      <p className="iconText">CSS</p>
    </div>

    <div className="iconBlock">
      <img className= "icon redux" src={Redux}/>
      <p className="iconText">Redux</p>
    </div>

    <div className="iconBlock">
      <img className= "icon html" src={HTML}/>
      <p className="iconText">HTML</p>
    </div>

    </div> <br/><br/>
    
    <div className="shortBreakline"></div> 

    <h2 className="aboutSection"> Education & Training </h2>

    <div className="outroBlock">
    <img className="ghBadge" src={gracehopper}></img><br/>
    <p className="outroText">
    I'm a graduate of Brown University, The University of Cambridge, and the Grace Hopper Program at Fullstack Academy. <br></br> <br/>
    As a student in the Grace Hopper Program, I gained extensive experience in conceptualizing and coding full-stack applications. I’m excited to contribute my programming skills to a team that values creativity, collaboration, and personal growth. Let’s work together! <br/> <br/>  
    </p>
    </div> <br/> <br/>
    <div className="shortBreakline"></div> <br/>

    <Link to="/projects" className="projectsLink" onClick={scrollToTop}> View My Projects </Link>
   


   </div>

  );
};