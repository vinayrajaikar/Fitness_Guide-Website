import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'


const ExerciseDetail = () => {
  return (
        <Box>
            <Detail/>
            <ExerciseVideos />
            <similarExercises />
        </Box>
  )
}

export default ExerciseDetail
