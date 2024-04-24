import headshot from '../assets/headshot.png'
import vases from '../assets/vases.png'
import throwing from '../assets/throwing.png'
import mug from '../assets/mug.png'
import gracehopper from '../assets/gracehopper.png'

export default function Homepage() {

  return(

   <div>
    <div className="intro">
    <p>My name is Melissa and I’m a full-stack software engineer based in Chicago, IL. As a former artist, I’m passionate about using a design-centered approach to build applications that are both beautiful and user-friendly. 
    </p>

    <img className="headshot" src={headshot}></img>

    </div>

    <p>
    I received my Bachelor’s degree from Brown University and my Master’s degree from the University of Cambridge, where my research explored how the arts and design can be used to connect people who come from different cultures. After spending several years in the International Education sector as an immigration advisor for international students, I decided to lean into the creative side of my background by venturing into my own artistic practice as the founder and Creative Director of Grey Remedy Ceramics. 
    </p>

    <div className="grPhotos">
    <img className="grPhoto" src={vases}></img>
    <img className="grPhoto" src={throwing}></img>
    <img className="grPhoto" src={mug}></img>
    </div>

    <p>In 2020, I began to experiment with code out of curiosity. I quickly noticed how coding allowed me to draw from so many skills that I had gained in other parts of my life. Writing in different languages as an International Relations major had helped me to understand the nuances of coding syntax. The creative problem-solving that I had engaged in as an entrepreneur shaped my approach to tackling coding challenges. Building things from scratch as an artist had given me the patience to focus on perfecting small pieces of code so that I could ultimately assemble them into something elaborate and dynamic.</p>
    <p>

    <img className="grBadge" src={gracehopper}></img><br/>

    After years of experimenting, I finally found the courage to pursue software engineering as a career, completing the Grace Hopper Program in March 2024. I’m excited to be pursuing a career that connects so many of my passions and interests while allowing me to build tools that have the potential to improve people’s daily lives. 
    </p>
    
    <p>To learn more about my background and experience, please see my Resume. 

    </p>


   </div>

  )
};