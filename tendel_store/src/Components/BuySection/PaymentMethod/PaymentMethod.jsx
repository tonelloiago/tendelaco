import React from 'react';
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import useStyles from './styles';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const PaymentMethod = () => {

    const classes = useStyles();
    const [method, setMethod] = useState('pix');

    const handleChange = (event) => {

        setMethod(event.target.value);

    };
    

    return (
        <div className={classes.root}>

            <Grid container spacing={4}>

            <Grid item xs={12} sm={5}>
                <FormControl component="fieldset" className={classes.formControl}>

                    <FormLabel component="legend" color="secondary">Forma de Pagamento:</FormLabel>
                    <RadioGroup
                        aria-label="paymentMethod"
                        name="payment"
                        className={classes.group}
                        value={method.value}
                        onChange={handleChange}
                        defaultValue="pix"
                    >
                        <FormControlLabel
                            value="pix"
                            control={<Radio color="secondary" />}
                            label="PIX"
                            labelPlacement="start"
                            onChange={handleChange}
                        />
                        
                    </RadioGroup>
            
                    
                </FormControl>  

                </Grid>

                <Grid item xs={12} sm={5} className={classes.buyButton}>
                    <Button variant="contained" color="secondary">Comprar</Button>
                </Grid>
            </Grid> 
        </div>
    )
}

export default PaymentMethod
