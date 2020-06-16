import React, {useState} from 'react';
import {
  Button,
  Typography,
  TextField,
} from '@material-ui/core';

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
      width: '100%',
    },
    textArea: {
      backgroundColor: '#482be7',
      color: "white",
      marginBottom: '5px',
      borderRadius: "4px",
      width: "100%",
    },
    button: {
      marginTop: '8px',
      width: '100%',
      minHeight: '4vh',
      color: "#482be7",
      border: '1px solid',
    },
    input: {
      color: 'white',
    }
  }));  

export const ContactForm = () => {

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  })

  const handleResponse = (status, msg) => {
      if (status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: msg }
        })
        setInputs({
          email: '',
          name: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus({
          info: { error: true, msg: msg }
        })
      }
    }

    const handleOnChange = e => {
      e.persist()
      setInputs(prev => ({
        ...prev,
        [e.target.id]: e.target.value
      }))
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })
    }

    const handleOnSubmit = async e => {
      e.preventDefault()
      setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      })
      const text = await res.text()
      handleResponse(res.status, text)
    }    
    
    const classes = useStyles();

    return(
      <>
        <form onSubmit={handleOnSubmit} className={classes.root}>
          <TextField
            id="email"
            type="email"
            required
            variant="outlined"
            label="Email"
            name="email"
            InputLabelProps={{ style: { color: '#fff' },}} 
            InputProps={{ className: classes.input }}
            value={inputs.email}
            onChange={handleOnChange}
            className={classes.textFeild}
          />
          <br />
          <TextField
            id="name"
            type="name"
            variant="outlined"
            label="Name"
            name="name"
            InputLabelProps={{ style: { color: '#fff' },}} 
            InputProps={{ className: classes.input }}
            value={inputs.name}
            onChange={handleOnChange}
            className={classes.textFeild}
          />
          <br />
          <TextField
            variant="outlined"
            id="subject"
            type="subject"
            label="Subject"
            name="subject"
            InputLabelProps={{ style: { color: '#fff' },}} 
            InputProps={{ className: classes.input }}
            value={inputs.subject}
            onChange={handleOnChange}
            className={classes.textFeild}
          />
          <br />
          <TextField
            variant="outlined"
            id="message"
            type="message"
            required
            multiline
            rows={4}
            label="Contact Us"
            name="message"
            InputLabelProps={{ style: { color: '#fff' },}} 
            InputProps={{ className: classes.input }}
            value={inputs.message}
            onChange={handleOnChange}
            className={classes.textArea}/>
          <br />
          <Button
            type="submit"
            disabled={status.submitting}
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleOnSubmit}
          > 
            <Typography variant="body2" style={{color: 'white' }}>
              {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
            </Typography>
          </Button>
        </form>
         {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )}
      </>
    )
}