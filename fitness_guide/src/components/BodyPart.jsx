import React, { useContext }  from 'react'
import { Stack,Typography, stackClasses } from '@mui/material'
import Icon from '../assets/icons/back.png';
import itemImage from '../assets/IconsData.js'
import { UserContextData } from '../App'

const BodyPart = ({item}) => {
  console.log(item);

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
                gap:'47px',
                borderTop: '', // No border by default
                '&:hover': {
                  borderTop: '4px solid #ff2625',
                },
            }}
            onClick={()=>{
                setBodyPart(item);
                window.scrollTo({top:1800,left:100,behavior:'smooth'})
            }}
            >
        <img src={itemImage[item]} alt="dumble" style={{width:'180px',height:'140px'}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart
