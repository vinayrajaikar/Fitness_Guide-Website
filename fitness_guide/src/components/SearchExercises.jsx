import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/FetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData=async()=>{
      const bodyPartsData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,exerciseOptions);
      setBodyParts(['all',...bodyPartsData])
    }

    fetchExerciseData();
  },[])

  const handleSearch = async () => {
    if (search) {
      // Use a valid endpoint
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );
      console.log(exercisesData);

      const searchedExercises=exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(search)
      || exercise.name.toLowerCase().includes(search)
      || exercise.name.toLowerCase().includes(search)
      || exercise.name.toLowerCase().includes(search)
    );

    setSearch('');
    setExercises(searchedExercises);
    }
  };

  return (
    <div>
      
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '30px' } }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises you <br />
          should know
        </Typography>

        <Box position="relative" bg="72px">
          <TextField
            sx={{
              input: {
                fontWeight: '700',
                border: 'none',
                borderRadius: '4px',
              },
              width: { lg: '800px', xs: '350px' },
              backgroundColor: '#fff',
              borderRadius: '40px',
            }}
            height="76px"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
          />

          <Button 
            className="search-btn"
            sx={{
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px' },
              fontSize: { lg: '20px', xs: '14px' },
              height: '56px',
              position: 'absolute',
              right: '0',
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        <Box sx={{position:'relative',width:'100%',p:'20px'}} >
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      </Stack>
    </div>
  );
};

export default SearchExercises;
