import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/b14.png'
// import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'150px',xs:'70px'},
              ml:{xs:'20px'}}} position="relative" p="20px" >

      <Typography color="#FF2625" fontWeight="600" fontSize="26px" >
        Fitness Club
      </Typography>

      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}} } >
      Move More,<br/> Live More,<br/> Be More 
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={3} >
        Check out the most effective exercises
      </Typography>

      <Stack sx={{ml:{xs:'30px'}}}>
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '250px', textAlign: 'center', background: '#FF2625', padding: '10px', fontSize: '25px', textTransform: 'none', color: 'white', borderRadius: '50px' }}>Explore Exercises</a>
      </Stack>

      <Typography fontWeight={600} marginTop='90px' marginLeft='250px' color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none'}, fontSize: '200px' }}>
        Exercise
      </Typography>

    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
      
    </Box>
       



  )
}

export default HeroBanner
