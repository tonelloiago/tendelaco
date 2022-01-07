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


const PaymentMethod = () => {

    const classes = useStyles();
    const [method, setMethod] = useState('pix');

    const handleChange = (event) => {

        setMethod(event.target.value);

    };
    

    return (
        <div className={classes.root}>


            <FormControl component="fieldset" className={classes.formControl}>

                <FormLabel component="legend" color="secondary">Forma de Pagamento</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender2"
                    className={classes.group}
                    value={method.value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="pix"
                        control={<Radio color="secondary" />}
                        label="PIX"
                        labelPlacement="start"
                        onChange={handleChange}
                    />

                    <FormControlLabel
                        value="creditCard"
                        control={<Radio color="secondary" />}
                        label="Cartão de Crédito"
                        labelPlacement="start"
                        onChange={handleChange}
                    />
                    
                </RadioGroup>
                
            </FormControl>
//COLOCAR UM GRID AQUI
            <div className={classes.buyButton}>
               
            <TextField
                    size="small"
                    variant="outlined"
                    value={method}
                    
                />
            </div>
        </div>
    )
}

export default PaymentMethod
