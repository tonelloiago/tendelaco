import { React, useState } from 'react';
import { Card, CardContent, CardActions, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';

const Ticket = ({ ticket }) => {

    const classes = useStyles();
    const [count, setCount] = useState(0);
    

    const handleChange = (event) => {

        if(event.target.value >= 0) {
            setCount(event.target.value)
        }
    };

    return (
        <Card className={classes.root}>
            
            <CardContent>

                <div className={classes.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {ticket.name}
                    </Typography>

                </div>

                <Typography variant='body2' color="textSecondary">
                    {ticket.description}
                </Typography>

            </CardContent>

            <CardActions disableSpacing className={classes.CardActions}>

            
                <Fab color="secondary" size="small" className={classes.fab} onClick={() => {

                    if (count > 0) {
                        setCount(count - 1);
                    };

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

                <Fab color="secondary" size="small" className={classes.fab} onClick={() => setCount(count + 1)}>
                    <AddIcon />
                </Fab>

            
            </CardActions>
        </Card>

    )
}

export default Ticket