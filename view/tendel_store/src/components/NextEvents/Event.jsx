import * as React from 'react';
import Box from '@mui/material/Box';

import background from './assets/background.jpeg'
import logo from './assets/logo.png'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';


const buttonColor = '#D30C7B';


const cardStyle = {

  cardContainer : {

    minWidth: 360,
    maxWidth: 1080, 
    position: 'absolute', 
    padding: '10rem',
    bottom: '60px',
    ['@media (max-width:900px)']: { // eslint-disable-line no-useless-computed-key
      padding: '5rem',
    },
    ['@media (max-width:420px)']: { // eslint-disable-line no-useless-computed-key
      padding: '0',
    }


  }
  
};


export default function MainContainer() {

  return (

  
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <img style={{ background: 'no-repeat', backgroundAttachment: 'fixed', width: '100%', height: '100vh' }} src={background}/>

      <Card sx={cardStyle.cardContainer}>
        <CardMedia
          component="img"
          height="440px"
          image={logo}
          alt="Logo Tendel"
        />
        <CardContent style={{display: 'flex', justifyContent: 'center'}}>
          <Typography gutterBottom variant="h4" component="div">
            Tendelaço 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" size="large" style={{ padding: '20px 40px' ,backgroundColor: buttonColor}}>PIX</Button>
        </CardActions>
      </Card>

    </Box>
  );
}


