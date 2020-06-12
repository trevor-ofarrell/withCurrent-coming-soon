import React, {useState} from 'react';
import { Button, Box, Container, Typography,
  TextField,
} from '@material-ui/core';
import axios from 'axios'

import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      paddingTop: '2vh',
    },
    text: {
        color: 'white',
        marginBottom: '4vh',
    },
    textFeild: {
      backgroundColor: '#482be7',
      color: "white",
      marginBottom: '8px',
      borderRadius: "4px",
      width: '30vw',
    },
    textArea: {
      backgroundColor: '#482be7',
      color: "white",
      marginBottom: '5px',
      borderRadius: "4px",
      width: "30vw",
    },
    button: {
      marginTop: '8px',
      width: '30vw',
      minHeight: '4vh',
      color: "#482be7",
      border: '1px solid',
    },
    input: {
      color: 'white',
    }
  }));  

export const ContactForm = () => {
    const [inputs, setInputs] = useState({email: '', name: '', subject: '', description: ''})
    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        //destructure from inputs 
        const {email,name,subject,description} = inputs
        axios.post('/sendtome', {
          //make an object to be handled from req.body on the backend. 
          email,
          name,
          subject,
          //change the name to represent text on the backend.
          text: description
        }) 
    }
    const classes = useStyles();

    return(
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField variant="outlined" label="Email" name="email" InputLabelProps={{ style: { color: '#fff' },}}  InputProps={{ className: classes.input }} value={inputs.email} onChange={handleChange} className={classes.textFeild}/>
          <br />
          <TextField variant="outlined" label="Name" name="name" InputLabelProps={{ style: { color: '#fff' },}}  InputProps={{ className: classes.input }} value={inputs.name} onChange={handleChange} className={classes.textFeild}/>
          <br />
          <TextField variant="outlined" label="Subject" name="subject" InputLabelProps={{ style: { color: '#fff' },}}  InputProps={{ className: classes.input }} value={inputs.subject} onChange={handleChange} className={classes.textFeild}/>
          <br />
          <TextField variant="outlined" multiline rows={4} label="Contact Us" name="description" InputLabelProps={{ style: { color: '#fff' },}}  InputProps={{ className: classes.input }} value={inputs.description} onChange={handleChange} className={classes.textArea}/>
          <br />
          <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit} > <Typography variant="body2" style={{color: 'white' }}>submit </Typography></Button>
        </form>
    )
}