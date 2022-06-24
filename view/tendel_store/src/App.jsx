import React from 'react'

import MainContainer from './components/NextEvents/Event'
import ResponsiveAppBar from './components/AppBar/AppBar'
import Mural from './components/Mural/Mural'


import { Grid } from '@mui/material'

const buttonColor = '#D30C7B';


const App = () => {
  return (
    <div>


        <Grid container spacing={0}>


          <Grid id='home' item xs={12} md={12}>
            <MainContainer></MainContainer>
          </Grid>

          <Grid id='festa' item xs={12} md={12} style={{ display: 'flex', justifyContent: 'center', backgroundColor: buttonColor}}>
            <Mural ></Mural>
          </Grid>

          <Grid id='contato' item xs={12} md={12}>
            <ResponsiveAppBar></ResponsiveAppBar>
          </Grid>
        </Grid>

        
    </div>
  )
}

export default App