import { React, useState } from 'react';
import { Card, CardContent, CardActions, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';
import { createIncrementalCompilerHost } from 'typescript';

const Ticket = ( ticket ) => {

    console.log(ticket.ticket)

    const classes = useStyles();
    const [count, setCount] = useState(0);
    

    const handleChange = (event) => {

        event.preventDefault()
        if(event.target.value >= 0) {
            setCount(Number(event.target.value))
            
        }
    };

    return (
        
        <Card className={classes.root}>
            
            <CardContent >

                <div className={classes.CardContent}>
                    <Typography variant='h6' gutterBottom>
                        {ticket.ticket.name}
                    </Typography>

                </div>

                <Typography variant='body2' color="textSecondary">
                    {/* {ticket.description} */}
                </Typography>

            </CardContent>

            <CardActions disableSpacing className={classes.CardActions}>

                <Fab color="secondary" size="small" className={classes.fab} onClick={() => {
                    
                    if(ticket.ticket.quantity > 0) {

                        ticket.ticket.quantity -= 1
                        setCount(count - 1)

                    }


                }}>

                    <RemoveIcon />
                
                </Fab>

                <TextField
                    size="small"
                    className={classes.Quantity}
                    variant="outlined"
                    onChange={handleChange}
                    value={count}
                />

                <Fab color="secondary" size="small" className={classes.fab} onClick={() => {

                    ticket.ticket.quantity += 1
                    setCount(count + 1)

                }}>

                    <AddIcon />

                </Fab>
                
            </CardActions>
        </Card>

    )
}

export default Ticket