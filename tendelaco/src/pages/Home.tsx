import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '../components/Button';

export function Home() {

    const tickets = [
        { type: "Backstage", price: 80},
        { type: "FrontStage Individual", price: 75},
        { type: "VIP", price: 60},
        { type: "Pista", price: 40},
      ]

      const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={10}>

                <Item>xs=6 md=10</Item>

            </Grid>

            <Grid item xs={6} md={4}>
            { tickets.map ( (ticket) => <Item>{ ticket.type }</Item>)}
            </Grid>

            <Grid item xs={6} md={4}>

            { tickets.map ( (ticket) => <Item>
                { ticket.type + " " + ticket.price }
                <Button />
                

            </Item>
            )}
            

            </Grid>

            </Grid>
        </Box>
    )
}