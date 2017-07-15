const express = require('express');
const router = express.Router();
const config = require('../../config');
const helper = require('sendgrid').mail;
const fromEmail = new helper.Email('dick.butt@gmail.com');
const toEmail = new helper.Email('keegan.famouss@gmail.com');
const subject = 'Dick butt says....';
const content = new helper.Content('text/plain', 'Thanks for buying my shitty pics!!!');
const mail = new helper.Mail(fromEmail, subject, toEmail, content);

const sg = require('sendgrid')(config.sendgrid_api_key);

const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
});

//can we use next.js to render an html view that can be set to the content of this email?
//we can create templates on sendgrid.com, then each call to this route simply states which template ID to use with the coinciding req.Json();
router.get('/', function(req, res) {

    sg.API(request, function(error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
    });

    res.send({ message: "email success!" });
});

module.exports = router;