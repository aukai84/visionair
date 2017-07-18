const express = require('express');
const router = express.Router();
const Mailer = require('./mailer-service.js');

/*const APIkey = require('../../config').sendgrid_api_key;
const Handlebars = require('handlebars');
const fs = require('fs');

//compile template
const template = fs.readFileSync((__dirname + '/views/' + 'thanks-email.hbs'), 'utf-8');
//const template2 = fs.readFileSync('./views/welcome-email', 'utf-8');
const emailContent = Handlebars.compile(template);


//email helpers from SendGrid API
const helper = require('sendgrid').mail;
const fromEmail = new helper.Email('dick.butt@gmail.com');
const toEmail = new helper.Email('keegan.famouss@gmail.com');
const subject = 'Dick butt says....';
const content = new helper.Content('text/html', emailContent({ firstName: 'Keegan' }));
const mail = new helper.Mail(fromEmail, subject, toEmail, content);

const sg = require('sendgrid')(APIkey);
const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
});

//call this route to send a welcome email upon sign-up
router.get('/send-thanks', function(req, res) {
    sg.API(request, function(error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
    });
    res.send({ message: "email success!" });
});*/

//call this route with a JSON list of users.
router.post('/preview', Mailer.send, function(req, res) {
    res.send({ message: 'mail has been sent!' });
});

module.exports = router;