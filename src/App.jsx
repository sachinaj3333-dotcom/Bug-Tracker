import { useState } from 'react'
import './App.css'
import Navbar from './components/landing page/Navbar'
import Home from './components/landing page/Home'
import LandingPage from './pages/landing page/LandingPage.jsx'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'

function App() {

  return (
    <>
      {/* <Navbar />
      <Home/> */}
      {/* <LandingPage/> */}
      {/* <Signup/> */}
      <Signin/>
    </>
  )
}

export default App
