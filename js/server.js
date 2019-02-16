const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../')))

app.post('/send', (req, res) => {
  const emailTemplate = `
    <h2>Hey Mike</h2>
    <h3>Contact details</h3>
    <p>${req.body.name}</p>  
    <p>${req.body.email}</p>  
    <h2>${req.body.subject}</h2>
    <h2>Message</h2>
    <p>${req.body.message}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2', 
      user: "cartohistory@gmail.com", // Your gmail address.
      clientId: "317207175456-66tooe4gjt7sa345ke3nsv2rmpp81mnv.apps.googleusercontent.com",
      clientSecret: "XhDlDlLunR9CY0vP27SlEYDX",
      refreshToken: '1/uLzDc0hB-oawSmMVyPMF3Xh14Z6r92exiMBTaZzlMjc'
    }
  });

  const mailOptions = {
    from: '<cartohistory@email.com>', // sender address
    to: 'michal.muszynski@pm.me', // list of receivers
    subject: 'Carto Inquiry', // Subject line
    html: emailTemplate// plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err)
      console.log(err)
    else
      console.log(info);
    });
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../contact.html'))
})
