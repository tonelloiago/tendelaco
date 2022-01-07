import { React, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Ticket from '../Components/Ticket/Ticket';
import Event from '../Components/Event/Event';
import Payment from '../Components/BuySection/PaymentMethod/PaymentMethod';

import Tendel from '../tendel.jpg';

import useStyles from './styles';

const Store = () => {

    const classes = useStyles();

    const [vipQtd, setVipQtd] = useState(0);
    const [backstageQtd, setBackstageQtd] = useState(0);
    const [pistaQtd, setPistaQtd] = useState(0);
    const [frontstageQtd, setFrontstageQtd] = useState(0);

    const tickets = [
      { id: 1, name: '1º Lote VIP R$ 60,00', description: '', quantity: vipQtd, setQuantity: setVipQtd},
      { id: 2, name: 'Backstage R$ 80,00', description: '', quantity: backstageQtd, setQuantity: setBackstageQtd},
      { id: 3, name: 'Pista R$ 80,00', description: '', quantity: pistaQtd, setQuantity: setPistaQtd},
      { id: 5, name: 'Frontstage R$ 80,00', description: '', quantity: frontstageQtd, setQuantity: setFrontstageQtd},
    ];
    
  
    return (

        <div className={classes.root}>

            <Grid container className={classes.grid} spacing={1
            }>

              <Grid item xs={12} sm={10} className={classes.gridTop}>
                <Paper className={classes.paper}>

                  
                </Paper>
              </Grid>

              
              <Grid item xs={12} sm={5} className={classes.gridLeft}>
                  <Paper className={classes.paper}>

                    <Event></Event>

                  </Paper>
                </Grid>
                
              <Grid item xs={12} sm={5} className={classes.gridRight}>

                  <Paper className={classes.paperRight}>

                      { tickets.map((ticket) => (
                        
                        <Ticket name={ticket.name} description={ticket.description} quantity={ticket.quantity} setQuantity={ticket.setQuantity} ></Ticket>
                        
                        ))}

                      <Payment></Payment>

                      

                  </Paper>

              </Grid>

            </Grid>

        </div>
    );
};

export default Store;
