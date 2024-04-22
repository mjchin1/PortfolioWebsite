import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import './App.css'
import Homepage from './components/Homepage'
import AboutPage from './components/AboutPage'
import Navigations from './components/Navigations'
import Projects from './components/Projects'
import Contact from './components/Contact'


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
      <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
    </>
  )
}

export default App
