import React, { createContext,useState } from 'react'
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home.jsx';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Diet from './components/diet/Diet.jsx';
import './App.css';

export const UserContextData= createContext(null);

const App = () => {

  //usestates For all Home components
  const [bodyPart, setBodyPart]=useState('all');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);


  //usestates For all ExerciseDetail components
  // const [exerciseDetail, setExerciseDetail] = useState({});
  // const [exerciseVideos, setExerciseVideos] = useState([]);

  return (

  <UserContextData.Provider value={{ bodyPart, setBodyPart, 
                                     exercises, setExercises, 
                                     bodyParts, setBodyParts,
                                    //  exerciseDetail, setExerciseDetail,
                                    //  exerciseVideos, setExerciseVideos
                                  }}>
    <>
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            <Route path="/diet" element={<Diet/>}/>
            {/* <Route path="/diet#exercises" element={<Home/>}/> */}
          </Routes >
          <Footer/>
      </Box>
      {/* <div className="text-3xl font-bold underline">App</div> */}
    </>

  </UserContextData.Provider>
    
  )
}

export default App




