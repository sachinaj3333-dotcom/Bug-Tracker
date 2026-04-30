import { useState } from 'react'
import './App.css'
import Navbar from './components/landing page/Navbar'
import Home from './components/landing page/Home'
import LandingPage from './pages/landing page/LandingPage.jsx'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Navbar />
      <Home/> */}
      {/* <LandingPage/> */}
      {/* <Signup/> */}
      {/* <Signin/> */}

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
