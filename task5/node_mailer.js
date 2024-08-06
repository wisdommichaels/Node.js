var nodemailer = require('nodemailer');
var dotenv = require('dotenv');

dotenv.config()
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ijarwisdom@gmail.com',
      pass: process.env.PASS
    }
  });
  
  var mailOptions = {
    from: 'ijarwisdom@gmail.com',
    to: 'iamrex83@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'You see, That was so easy sir! so can you come back to class now? thank you sir.'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });