import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/landing page/Navbar'
import Home from './components/landing page/Home'
import LandingPage from './pages/landing page/LandingPage.jsx'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from './pages/main page/Sidebar.jsx'
import Dashboard from './pages/main page/Dashboard.jsx'
import Projects from './pages/main page/Projects.jsx'
import Tasks from './pages/main page/Tasks.jsx'
import Board from './pages/main page/Board.jsx'
import { decodeToken, isAuthenticated } from './utils/tokenUtil.js'

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  const storedToken = isAuthenticated();
  const navigate = useNavigate()
  // console.log(authenticate)
  useEffect(() => {

    if (storedToken) {
      setAuthenticate(true);
      navigate("/dashboard")
      // dispatch
    } else {
      setAuthenticate(false);
    }
  }, [storedToken, authenticate]);


  const [activeTab, setActiveTab] = useState("/dashboard");
  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, [window.location.pathname])
  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "dashboard":
  //       return <Dashboard />;
  //       break;
  //     case "project":
  //       return <Projects />;
  //       break;
  //     case "tasks":
  //       return <Tasks />;
  //       break;
  //     case "board":
  //       return <Board />;
  //       break;
  //     default:
  //       return <Dashboard />;
  //       break;
  //   }
  // }

  // console.log(authenticate)



  return (
    <>
      {authenticate ? (
        <div className='row g-0 ' >
          <div className="col-2 " style={{ height: "100vh ", overflow: "auto" }}>
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab} />
          </div>
          <div className="col-10" style={{ height: "100vh ", overflow: "auto" }}>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/board' element={<Board />} />
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

export default App;
