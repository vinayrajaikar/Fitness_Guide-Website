import React, { useContext }  from 'react'
import { Stack,Typography, stackClasses } from '@mui/material'
import Icon from '../assets/icons/gym.png';
import { UserContextData } from '../App'

const BodyPart = ({item}) => {

  const {setBodyPart,bodyPart}=useContext(UserContextData);
  return (
    <Stack type="button" alignItems="center" justifyContent="center" className='bodyPart-card'
            sx={{
                borderTop:bodyPart===item?'4px solid #ff2625':'',
                background:'#fff',
                borderBottomLeftRadius:'20px',
                marginTop:'30px',
                marginLeft:'-20px',
                width:'270px',
                height:'280px',
                cursor:'pointer',
                gap:'47px'
            }}
            onClick={()=>{
                setBodyPart(item);
                window.scrollTo({top:1800,left:100,behavior:'smooth'})
            }}
            >
        <img src={Icon} alt="dumble" style={{width:'40px',height:'40px'}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart
