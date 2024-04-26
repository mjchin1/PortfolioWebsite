import { Link } from 'react-router-dom'
import GitHub from '../assets/GitHub.png'
import LinkedIn from '../assets/LinkedIn.png'


export default function Navigations() {

  return (

    <nav>

    <Link to="/"> Home</Link>
    <Link to="/projects"> Projects</Link>

    <a href="https://github.com/mjchin1" target="_blank">{<img className="navLink" src={GitHub}/>}</a>
    <a href="www.linkedin.com/in/melissa1jchin" target="_blank">{<img className="navLink" src={LinkedIn}/>}</a>



  

    </nav>


    
  )
}