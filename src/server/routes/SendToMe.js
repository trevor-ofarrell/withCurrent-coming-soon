const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')

console.log("from sendToMe")

module.exports = sendToMeRouter

const transport = {
    //all of the configuration for making a site send an email.
  
    host: 'admin@withCurrent.com',
    port: 587,
    secure: false,
    auth: {
      user: 'admin@withCurrent.com',
    }
};

const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself')
    }
  });

sendToMeRouter.post('/', (req,res, next) => {
    //make mailable object
    const mail = {
      from: process.env.THE_EMAIL,
      to: 'tallan.taven@gmail.com',
      subject: req.body.subject,
      text: `
      from:
      ${req.body.name} 

      contact: ${req.body.email}

      message: 

      ${req.body.text}`
    }
    transporter.sendMail(mail, (err,data) => {
        if(err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
            status: 'success'
          })
        }
    })
});

