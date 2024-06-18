import React,{useEffect,useState,useContext } from 'react'
import  Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/FetchData'
import ExerciseCard from './ExerciseCard'
import { UserContextData } from '../App'


const Exercises = () => {
  // console.log(exercises);

const {exercises,setExercises,bodyPart}=useContext(UserContextData);
const[currentPage,setCurrentPage] = useState(1);
const exercisesPerPage = 6;

const indexOfLastExercise = currentPage * exercisesPerPage;
const indexofFirstExercise = indexOfLastExercise-exercisesPerPage;
const currentExercises = exercises.slice(indexofFirstExercise, indexOfLastExercise);


const paginate=(e,value)=>{
  setCurrentPage(value);
  window.scrollTo({top:1800,behaviour:'smooth'})
}

useEffect(() => {
  const fetchExerciseData = async () => {
    let exercisesData = [];

    if (bodyPart === 'all') {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
    } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
    }

    setExercises(exercisesData);
  };

  fetchExerciseData(); // Call the function here
}, [bodyPart, setExercises]);

  return (
    <div className='exercise-main-div'>
    <Box id="exercises" sx={{mt:{ lg:'110px'}}}  mt="50px" p="20px"  >
        <Typography variant='h2' mb="46px" sx={{fontSize:{ xs:'40px'},marginLeft:{xs:'50px'}}}>
              Showing Result
        </Typography>

        <Stack direction="row" sx={{gap:{lg:'110px',xs:'80px'}}} flexWrap="wrap" justifyContent="center" >
            {currentExercises.map((exercise,index)=>(
              <ExerciseCard key={index} exercise={exercise}/>
              // <p>{exercise.name}</p>
            ))}
        </Stack>

        <Stack mt="100px" alignItems="center">
            {exercises.length>9 && (
              <Pagination
                color='standard'
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(exercises.length/exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size='large'/>
            )}
        </Stack>
    </Box>
    </div>
  )
}

export default Exercises
