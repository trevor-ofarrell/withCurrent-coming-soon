import React from 'react';
import {
    Container,
    Typography,
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
} from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      width: '60vw',
      alignItems: 'center',
      alignContent: 'center',  
    },
    text: {
        color: 'white',
        marginBottom: '4vh',
    },
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


export const Cta = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Typography variant="h2" className={classes.text}>
                    Ensure Workforce Continuity During COVID-19 and Beyond.
                </Typography>
                <Typography variant="h2" className={classes.text}>
                    Coming Soon...
                </Typography>
            </MuiThemeProvider>
        </div>
    )
}