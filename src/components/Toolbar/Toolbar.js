import React, { Fragment, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { DataContext } from '../../context/DataContext';
import {
    Box,
    Container,
    Grid,
    Button
  } from '@material-ui/core';
import NavBar  from '../../views/navbar/NavBar';
import SearchIcon from '@material-ui/icons/Search';

export function Toolbar() {

    const { jsonData, saveProducts } = useContext(DataContext);

    //State to save search from input
    const [ searchValue, setSearchValue ] = useState('');

    //Function to get items by search
    const getResultsSearch = (e) => {

        e.preventDefault();

        axios.get(`http://localhost:8080/api/items?q=${searchValue}`)
        .then((res) => {
            res.data.items.length !== 0 ?  
                saveProducts({
                    items : res.data.items
                }) 
            :  searchValue('')
        })
        .catch(error => {
            console.error(error);
        });
    };

    //Assign jsonData to data for images, logo, input's placeholder and shortcuts
    const data = jsonData;

    return (
        <Fragment>
            <Box style={{width: "100%"}}>
                {/* Contains search bar */}
                <Box className="background-header">
                    <div className="container-header">
                        <Grid item xs={8}  className="containerGrid">
                            <Box className="sizeBox_container">
                                <Container>
                                    <div  className="containerGrid">
                                        <div style={{width: "20%", textAlign: "center", paddingTop: "10px"}}>
                                            <img src={data.header.logo} className="img_logo" alt="Logo Mercado Libre" />
                                        </div>
                                        <div style={{width: "90%"}}>
                                            <input className="search-box-input" type="text" placeholder={data.header.search}
                                                onKeyUp={(e) => setSearchValue(e.target.value)}/>
                                            <Button type="submit" variant="contained" style={{ backgroundColor: "white", color: "gray", padding: "10px", borderRadius: "0px"}} color="primary" onClick={getResultsSearch}>
                                                <SearchIcon />
                                            </Button>
                                        </div>
                                    </div>
                                </Container>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className="containerGrid">
                            <Box className="sizeBox_container" style={{textAlign: "right"}}>
                                <img src={data.header.ad_image} style={{width: "80%"}} alt="free_sends"/>
                            </Box>
                        </Grid>
                    </div>
                    <div className="container-header" >
                        <div maxWidth={false} className="containerShortcuts" >  
                            <div style={{ display: 'flex', width: '80%', color: '#715f5f', justifyContent: 'center'}} >
                                <div style={{ textAlign: 'left', display: 'flex', width: '60%', fontSize: '0.8rem'}}>
                                    {data.header.links.map(item  =>(
                                        <div  
                                            style={{width: "20%", cursor: 'pointer', textAlign: "center"}}
                                            className="style-shortcuts"
                                            key={item}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="title_myAccount" >
                                <p style={{textAlign: 'right'}} className="titlle_account">{data.header.profile}</p>    
                            </div>
                        </div>  
                    </div>
                </Box>
                {/* Contains the shortcuts */}
                <Box className="container_shortcuts" >
                    <Grid container item xs={12} >
                        <NavBar 
                            shortcuts={data.shortcuts}
                            title={data.title}
                            subtitle={data.subtitle}
                        />
                    </Grid>
                </Box>
            </Box>
        </Fragment>
    )
}