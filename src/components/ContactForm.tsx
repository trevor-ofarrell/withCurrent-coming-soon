import React, {useState} from 'react';
import { Button, Box, Container, Typography } from '@material-ui/core';
import axios from 'axios'

import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
    },
    text: {
        color: 'white',
        marginBottom: '4vh',
    },
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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" name="email" value={inputs.email} onChange={handleChange} />
          <br />
          <input type="text" placeholder="name" name="name" value={inputs.name} onChange={handleChange} />
          <br />
          <input type="text" placeholder="subject" name="subject" value={inputs.subject} onChange={handleChange} />
          <br />
          <textarea name="description" placeholder="tell us about your experience" value={inputs.description} onChange={handleChange} cols="30" rows="10"></textarea>
            <br />
          <button>submit</button>
        </form>
    )
}