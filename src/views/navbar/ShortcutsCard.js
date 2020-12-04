import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    marginBottom: '0px',
    paddingBottom: '0px',
    width : '20%',
    border: 'none',
    boxShadow: '-2px 13px 6px -13px rgba(0,0,0,0.75)'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const BoxDescription = styled.div`
  text-align:"center";
  width: 100%;
  font-family: 'Proximanova-regular';
`;

const handleState  = () => {
    console.log("Click en item")
}

const ShotcutCard = ({ item }) => {

  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardContent className="containerColumn cursor" >
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          onClick={ handleState }
          className="hover_shortcut"
        >
          <img
            alt="Item"
            src={item.image_src}
            style={{width:"50%"}}
          />
        </Box>
        <BoxDescription>
          <div style={{textAlign: "center"}}>{item.name}</div>
        </BoxDescription>
      </CardContent>
    </Card>
  );
};

export default ShotcutCard;
