import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/landing page/Navbar'
import Home from './components/landing page/Home'
import LandingPage from './pages/landing page/LandingPage.jsx'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './pages/main page/Sidebar.jsx'
import Dashboard from './pages/main page/Dashboard.jsx'
import Projects from './pages/main page/Projects.jsx'
import Tasks from './pages/main page/Tasks.jsx'
import Board from './pages/main page/Board.jsx'

function App() {

  const [authenticate, setAuthenticate] = useState(false);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (storedToken) {
      setAuthenticate(true);
      // dispatch
    } else {
      setAuthenticate(false);
    }
  }, [storedToken]);




  return (
    <>
      {authenticate ? (
        <div className='row g-0 ' >
          <div className="col-2 " style={{height: "100vh ", overflow: "auto"}}>
            <Sidebar />
          </div>
          <div className="col-10" style={{height: "100vh ", overflow: "auto"}}>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/tasks' element={<Tasks/>}/>
              <Route path='/board' element={<Board/>}/>
            </Routes>
          </div>
        </div>
      )

        :

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path='/' element={<LandingPage />} /> */}
          <Route path='/*' element={<LandingPage />} />
        </Routes>
      }

    </>
  )
}

export default App
