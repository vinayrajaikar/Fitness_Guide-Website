import React from 'react'
import { useState,useEffect } from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material'

const SearchExercises = () => {
  return (
    <div>
      <Stack alignItems='center' mt="37px" justifyContent="center" p="20px" >
        
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
          Awesome Exercises you <br />
          should know
        </Typography>

        <Box position="relative" bg="72px">
          <TextField 
            sx={{input:{fontWeight:'700',border:'none',borderRadius:'4px'},width:{lg:'800px', xs:'350px'},backgroundColor:'#fff',borderRadius:'40px'}}
            height="76px"
            value="" 
            onChange={(e)=>{}}
            placeholder='Search Exercises'
            type='text'/>

            <Button className='search-btn' sx={{bgcolor:'#FF2625', color:'#fff', textTransform:'none',
              width:{lg:'175px',xs:'80px'}, fontSize:{lg:'20px',xs:'14px'}, height:'56px',position:'absolute',right:'0'
            }}>Search</Button>
        </Box>


      </Stack>
    </div>
  )
}

export default SearchExercises
