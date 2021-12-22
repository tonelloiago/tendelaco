import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Ticket from '../Components/Ticket/Ticket';

import useStyles from './styles';

const tickets = [
  { id: 1, name: '1º Lote VIP  -  R$ 60,00', description: ''},
  { id: 2, name: 'Backstage - R$ 80,00', description: ''},
  { id: 3, name: 'Pista - R$ 80,00', description: ''},
  { id: 4, name: 'Camarote - R$ 80,00', description: ''},
  { id: 5, name: 'Frontstage - R$ 80,00', description: ''},
];


const Store = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>

        <Grid container spacing={12}>

          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>

                { tickets.map((ticket) => (

                  <Ticket ticket={ticket}></Ticket>

                ))};

            </Paper>

          </Grid>

        </Grid>

      </div>
    );
};

export default Store;
