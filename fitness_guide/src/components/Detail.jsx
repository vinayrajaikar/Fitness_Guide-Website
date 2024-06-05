import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
  const {bodyPart,gifUrl,name,target,equipment}=exerciseDetail;

  const extraDetail=[
    {
        icon:BodyPartImage,
        name:bodyPart,
    },
    {
        icon: TargetImage,
        name:target,
    },
    {
        icon: EquipmentImage,
        name: equipment,
    }
  ]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>

        <Stack sx={{gap:{lg:'35px',xs:'20px'}}} >
            <Typography variant='h4' textTransform='capitalize'>
                {name}
            </Typography>
            <Typography variant='h6' >
            Exercises keep you strong. Try the <span className="bold-text">{name}</span> exercise to boost your strength. It targets your <span className='bold-text'>{target} </span> and works your <span className='bold-text'>{bodyPart}</span>. Watch the gif above to perform the exercise effectively. Add this to your routine and see the difference,Stay Strong!
            </Typography>

            {extraDetail.map((item,index)=>(
                <Stack key={index}   direction="row" gap="24px" alignItems="center">
                    <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                        <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
                    </Button>
                    <Typography textTransform="capitalize" variant='h6'>
                        {item.name}
                    </Typography>
                </Stack>

            ))}
        </Stack>
    </Stack>
  )
}

export default Detail


