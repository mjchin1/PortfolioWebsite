import { Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navigations from './components/Navigations';
import Projects from './components/Projects';

function App() {

  return (
    <>
      <div className="appHeader">
      <h3 className="appTitle">MELISSA CHIN | Software Engineer</h3>
      <Navigations/>
      </div>

      <div className="appBody">
    
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/projects' element={<Projects/>} />
      </Routes>
      </div>
      
      <div className="breakline"></div>

      <div className="appFooter">
      © Melissa Chin, 2024. All rights reserved. <br/>
      <a href="https://github.com/mjchin1/PortfolioWebsite">Github Repository</a>
      
      </div>

     
    </>
  );
}

export default App;
