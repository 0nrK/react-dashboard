import React from 'react'
import "./App.scss"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App