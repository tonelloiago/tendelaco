import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import background from './assets/background.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '0px',
  margin: '0px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MainContainer() {
  return (

    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <Item><img width='100%' src={background}/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
