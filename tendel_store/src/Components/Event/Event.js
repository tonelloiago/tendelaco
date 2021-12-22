import React from 'react'
import EventIcon from '@material-ui/icons/Event';
import Location from '@material-ui/icons/Room'
import Info from '@material-ui/icons/Info';

import useStyles from './styles';

const Event = () => {

    const classes = useStyles();

    return (
        <div>


            <h1>Tendelaço 2022</h1>

            <div className={classes.upperInfo}>

                <p className={classes.iconAndtext}>
                    <EventIcon className={classes.eventIcons}></EventIcon>
                    Sábado, 23:00 - 15 de Janeiro de 2022

                </p>

                <p className={classes.iconAndtext}>

                    <Location className={classes.eventIcons}></Location>
                    Rota 40 Graus - Sananduva/RS

                </p>
            
            </div>

            <p className={classes.iconAndtext}>
                <Info className={classes.eventIcons}>Informações</Info>
                Informações:
            </p>

            <p> 

            Lorem ipsum dolor sit amet. Et tempore nulla est autem accusantium ad beatae animi. Ab iusto magnam qui ipsa suscipit quo dolorem impedit. Et mollitia molestias ut officiis quis ut possimus iste in placeat quibusdam sit nobis optio quo itaque nobis! Et eaque quaerat 33 blanditiis omnis qui dolores voluptatum non quia omnis vel amet fugit aut exercitationem expedita.

            In quae error in blanditiis labore sit quasi similique. Ab sapiente beatae et unde sapiente sed internos natus.

            Ea fugit aliquam vel voluptates voluptatem et amet error eos quia expedita qui odio quos eos molestiae obcaecati est adipisci nihil. Et quam excepturi et quae debitis ad reprehenderit tempore quo itaque sunt. Sed quia sunt ea velit assumenda nam laudantium incidunt et dolore laboriosam eos minus quia.
            
            </p>

        </div>
    )
}

export default Event
