import React from 'react'
import {Box,Stack,Typography} from '@mui/material';

const ExerciseVideos = ({exerciseVideos,name}) => {
  console.log(exerciseVideos);
  if(!exerciseVideos.length) return 'Loading...'

  return (
    <Box sx={{marginTop:{lg:'100px',xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb='33px' sx={{fontSize:{xs:'35px'}}}>
          Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>

      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(4, 7)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderRadius: '10px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
