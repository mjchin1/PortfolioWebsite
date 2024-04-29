import MoodboardHomepage from '../assets/MoodboardHomepage.png'
import MoodboardLogin from '../assets/MoodboardLogin.png'
import MoodboardWebsite from '../assets/MoodboardWebsite.png'
import FieldtripHomepage from '../assets/FieldtripHomepage.png'
import FieldtripSinglePage from '../assets/FieldtripSinglePage.png'
import FieldtripFavoritesPage from '../assets/FieldtripFavoritesPage.png'
import ReviveHomepage from '../assets/ReviveHomepage.png'
import ReviveCalendar from '../assets/ReviveCalendar.png'
import ReviveSchedule from '../assets/ReviveSchedule.png'
import ReviveAccountPage from '../assets/ReviveAccountPage.png'



export default function Projects() {

  return(
    <div className="projectsContainer">
    <h1>Projects</h1>
    <div className="shortBreakline"></div> <br/>

    <h2>Moodboard</h2>
    <h3>A Full-Stack Website-Building App</h3>
    <img className="projectPhoto" src={MoodboardHomepage}/>
    <img className="projectPhoto" src={MoodboardLogin}/>
    <img className="projectPhoto" src={MoodboardWebsite}/>
    <p>
    React.js · Vite · Node.js · PostgreSQL · Express.js <br/> <br></br>

    Moodboard is a full-stack application that uses form data submitted by users to instantly design a beautiful website. While I love experimenting with design, I understand that making design decisions can be a huge hassle for many people when creating a website. Moodboard takes these decisions off the user’s plate, organizing their information and images into a universally flattering format. While users can create a website without logging in, once they create an account, they gain the functionality to save and edit the websites they have created.  <br/>
    <br/>Deployed App · GitHub Repository

    <div className="breakline"></div>

    </p>
    <h2>The Field Trip</h2>
    <h3>A Full-Stack Directory of Chicago's Hidden Gems</h3>
    <img className="projectPhoto" src={FieldtripHomepage}/>
    <img className="projectPhoto" src={FieldtripSinglePage}/>
    <img className="projectPhoto" src={FieldtripFavoritesPage}/>
    <p>
    React.js · Vite · Node.js · PostgreSQL · Express.js · Redux · RTK Query <br/> <br/>

    The Field Trip is a directory of hidden gems and unique spaces in Chicago. Sometimes we need little a push to shake up our routines and open ourselves up to new experiences. I created this application for Chicagoans who are looking to have new adventures by exploring beautiful, unfamiliar locations throughout the city. The application allows users to view the entire directory without creating an account, but once they do create an account, they gain the functionality to save individual locations to their list of favorite places, submit their own favorite places to be featured in the directory, and delete the places that they have submitted to the directory.  <br/>

   <br/> Deployed App · GitHub Repository
    </p>
    <div className="breakline"></div>


    <h2>Revive</h2>
    <h3>Group project | Full-Stack Wellness App</h3>
    <div className="revivePhotos">
    <img className="reviveProjectPhoto" src={ReviveHomepage}/>
    <img className="reviveProjectPhoto" src={ReviveCalendar}/>
    <img className="reviveProjectPhoto" src={ReviveSchedule}/>
    <img className="reviveProjectPhoto" src={ReviveAccountPage}/>
    </div>
    <p>
    React.js · Vite · Node.js · PostgreSQL · Express.js · Redux · RTK Query · Bootstrap <br/> <br/>

    My teammates and I created Revive as our capstone project for the Grace Hopper Program. Revive is a wellness app that helps users explore and save fitness routines, healthy recipes, and self-care ideas while allowing them to schedule and track their routines with a calendar. I created the calendar component of this app, which allows logged-in users to see a full monthly calendar view and add or delete events for individual calendar days. I also created the “Account” component of the app, which ties all of the app’s sections together by rendering the user’s saved fitness routines, recipes, self-care ideas, and daily schedule all in one place.  <br/>

    <br/>Deployed App · GitHub Repository

    </p>
    </div>
  )
}