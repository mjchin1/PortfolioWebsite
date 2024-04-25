import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage'
import Navigations from './components/Navigations'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div className="appBody">
      <div className="appHeader">
      <h3 className="appHeader appTitle">Melissa Chin | Software Engineer</h3>
      <Navigations/>
      </div>

      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/projects' element={<Projects/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
