import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import { Toolbar, Typography, Button } from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";

import logoTendel from './assets/logo.png'

const appBarStyle = {

    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center'

};

const toolBarStyle = {

    display: 'flex',
    width: '100%',
    padding: '2rem',
    justifyContent: 'space-around'
}

export default function Header() {

    return (

        <Box sx={{ flexGrow: 1 }}>

            <AppBar style={appBarStyle}>

                <Toolbar style={toolBarStyle}>

                    <img style={{ width: '50px' }} src={logoTendel} alt="logo tendel fc" onClick={scroll.scrollToTop} />

                    <div>

                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >

                            <Button color="inherit" variant="h4">
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    INICIO
                                </Typography>
                            </Button>

                        </Link>

                        <Link
                            activeClass="active"
                            to="festa"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >

                            <Button color="inherit" variant="h4">
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    FESTA
                                </Typography>
                            </Button>

                        </Link>

                        <Link
                            activeClass="active"
                            to="contato"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >

                            <Button color="inherit" variant="h4">
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    CONTATO
                                </Typography>
                            </Button>

                        </Link>

                        <Link
                            activeClass="active"
                            to="local"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >

                            <Button color="inherit" variant="h4">
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    LOCALIZAÇÃO
                                </Typography>
                            </Button>

                        </Link>




                    </div>
                </Toolbar>

            </AppBar>

        </Box>


    );


} 