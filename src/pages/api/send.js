const sgMail = require('@sendgrid/mail')
require('dotenv').config()

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message, subject } = req.body

  const content = {
    to: 'admin@withCurrent.com',
    from: 'admin@withCurrent.com',
    replyTo: email,
    subject: `New Message From - ${email}: ${subject}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}