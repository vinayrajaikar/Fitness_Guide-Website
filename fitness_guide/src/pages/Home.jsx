import React,{useContext} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import { UserContextData } from '../App'

const Home = () => {
  // const [bodyPart, setBodyPart]=useState('all');
  // const [exercises, setExercises] = useState([]);
  const {bodyPart, setExercises,setBodyPart,exercises}=useContext(UserContextData);
  // console.log(x);
  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
      {/* console.log(exercises); */}
    </Box>
  )
}

export default Home

