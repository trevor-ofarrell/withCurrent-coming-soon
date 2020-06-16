import React from 'react';
import {
  Button,
  Box,
  Container,
  Typography,
  CssBaseline, 
  Grid,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from '@material-ui/core';

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
      height: '8vh',
  },
  smallSpace: {
    height: '5vh',
  },
  cta: {
      marginLeft: '8vw',
      paddingBottom: '4vh',
  }
}));

const defaultTheme = createMuiTheme()
let theme = createMuiTheme({
    typography: {
        h2: {
            [defaultTheme.breakpoints.down('sm')]: {
                fontSize: '2rem'
            }
        }
    }
})
theme = responsiveFontSizes(theme);

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
            <MuiThemeProvider theme={theme}>
              <Grid item xs={12} md={6} lg={8} className={classes.cta}>
                  <Cta/>
              </Grid>
            </MuiThemeProvider>
            <Grid item xs={10} md={5} lg={5} className={classes.cta}>
                <ContactForm/>
            </Grid>
            <Grid item xs={12} className={classes.smallSpace}/>
        </Grid>
      </Box>
    </div>
  );
}