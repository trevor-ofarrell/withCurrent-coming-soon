import React from 'react';
import { Button, Box, Container, Typography, CssBaseline, Grid } from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';

import Head from 'next/head';
import {
    NavBar,
    Cta,
    ContactForm,
} from '../components';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(0deg, rgba(67,12,147,1) 0%, rgba(72,43,231,1) 76%, rgba(72,43,231,1) 100%);',
    minHeight: '100vh',
  },
  space: {
      height: '5vh',
  },
  cta: {
      marginLeft: '5vw',
      width: '80%',
  }
}));

export default function Admin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <CssBaseline />
      <Box>
        <NavBar />
        <Grid container>
            <Grid item xs={12} className={classes.space}/>
            <Grid item xs={12} md={6} lg={8} className={classes.cta}>
                <Cta/>
            </Grid>
            <Grid item xs={12} md={6} lg={8} className={classes.cta}>
                <ContactForm/>
            </Grid>
            <Grid item xs={12} />
        </Grid>
      </Box>
    </div>
  );
}