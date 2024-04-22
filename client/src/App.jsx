import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage'
import AboutPage from './components/AboutPage'
import Navigations from './components/Navigations'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <div className="appBody">

        <h1>Melissa Chin</h1>
      <Navigations/>
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/projects' element={<Projects/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
