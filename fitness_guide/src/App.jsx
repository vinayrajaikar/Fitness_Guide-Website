import React from 'react'
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home.jsx';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
const App = () => {
  return (
  
  <>
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
    {/* <div className="text-3xl font-bold underline">App</div> */}
  </>
    
  )
}

export default App
