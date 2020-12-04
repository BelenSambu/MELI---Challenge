import React from 'react';
import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
import ShortcutCard from './ShortcutsCard';
import './index.css'

const NavBar = ({shortcuts, title, subtitle}) => {

    return ( 
        <Box style={{width:"100%"}} className="containerGrid">
            <Grid container item xs={3} className="containerColumn">
                <div>
                    <div>
                        <h1 className="title-shortcuts">{title}</h1>
                    </div>
                    <div className="subtitule-shortcuts">
                        <p>{subtitle}</p>
                    </div>
                </div>
               
            </Grid>
            <Grid container item xs={9}>
                <Container maxWidth={false} className="containerGrid" style={{width:"100%"}}>  
                    <div style={{display:"flex"}} >
                        {shortcuts.map(item  =>(
                            <ShortcutCard 
                                key={item.image_src}
                                item ={item}
                            />
                        ))}
                    </div>
                </Container>  
            </Grid>
        </Box>
     );
}
 
export default NavBar;

