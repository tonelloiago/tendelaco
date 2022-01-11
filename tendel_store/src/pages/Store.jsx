import { React, useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Ticket from '../Components/Ticket/Ticket';
import Event from '../Components/Event/Event';
import Payment from '../Components/BuySection/PaymentMethod/PaymentMethod';
import useStyles from './styles';
import { Button } from '@material-ui/core';

import api from '../services/api';
import axios from 'axios';

class TicketClass {

  constructor(name) {

    this.name = name;
    this.quantity = 0;

  }

  increment() {

    this.quantity += 1;
    console.log(this.quantity);

  }

  decrement() {

    if(this.quantity > 0) {

      this.quantity -= 1;

    }

    console.log(this.quantity);

  }


}


const Store = () => {

    const classes = useStyles();

    let pista = new TicketClass('Pista R$ 40,00');
    let vip = new TicketClass('1º Lote VIP R$ 60,00');
    let backstage = new TicketClass('Backstage R$ 80,00');
    let frontstage = new TicketClass('Frontstage R$ 75,00');


    let tickets = [

      pista,
      vip,
      frontstage,
      backstage
      
    ];

    function show() {
      console.log(pista.quantity)
    }

    function onSubmit(ev) {

      const toBuyTickets = {

        "pista": tickets[0].quantity,
        "vip": tickets[1].quantity,
        "backstage": tickets[2].quantity,
        "frontstage": tickets[3].quantity,

      }

      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.post("http://localhost:3030/", toBuyTickets)
      .then((response) => {

      })
    
    }
    
  
    return (

        <div className={classes.root}>

            <Grid container className={classes.grid} spacing={1}>
              
              <Grid item xs={12} sm={5} className={classes.gridLeft}>
                  <Paper className={classes.paperLeft}>

                    <Event></Event>

                  </Paper>
                </Grid>
                
              <Grid item xs={12} sm={5} className={classes.gridRight}>

                  <Paper className={classes.paperRight}>

                      { tickets.map((ticket) => (
                        
                        <Ticket ticket={ticket}></Ticket>
                        
                        ))}

                      <Payment onClick={onSubmit}></Payment>
                      
                  </Paper>

              </Grid>

            </Grid>
        
        </div>

        
    );
};

export default Store;
