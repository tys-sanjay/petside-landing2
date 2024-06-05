// // email-server/server.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post('/contact', (req, res) => {
//   const { name, email, message , breed, number, age} = req.body;
//   console.log(name)

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'tys.sanjay@gmail.com', // Replace with your email
//       pass: 'edip pzme psck hwxb' // Replace with your email password or app-specific password
//     }
//   });

//   const mailOptions = {
//     from: email,
//     to: 'tys.sanjay@gmail.com', // Replace with the recipient's email
//     subject: `Message from ${name}`,
//     text: `Name:${name}
//            City:${message}
//            Dog Breed:${breed}
//            Age:${age}
//            Email: ${email}
//            Number: ${number}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.status(200).send('Email sent: ' + info.response);
//   });
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(cors())
const PORT = 3001; // Or any other port you prefer

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to forward the POST request to Google Apps Script
app.post('/contact', async (req, res) => {
  try {
    const response = await axios.post('https://script.google.com/macros/s/AKfycbzQn-_pRS8uhLFEHlRx5ldMMtt_6WbUxgTbLonPncqYcynDPwC-8-1sHs-v8PU2h74Rcw/exec', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

