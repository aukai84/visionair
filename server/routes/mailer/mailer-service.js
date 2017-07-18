const APIkey = require('../../config').sendgrid_api_key;
const Handlebars = require('handlebars');
const fs = require('fs');
const Mailer = require('./mailer-service.js');
const helper = require('sendgrid').mail;

//compile template
const template = fs.readFileSync((__dirname + '/views/' + 'thanks-email.hbs'), 'utf-8');
//const template2 = fs.readFileSync('./views/welcome-email', 'utf-8');
const emailContent = Handlebars.compile(template);


//dynamic mailer
//Include in REQUEST: toEmail, Subject, firstName
//need to add to request: which template we are using, may need to make multiple exports like: exports.send-purchase, exports.send-promotion, etc
exports.send = function(req, res, next) {
    //email helpers from SendGrid API

    const fromEmail = new helper.Email('dickbutt@gmail.com');
    const toEmail = new helper.Email(req.body.toEmail);
    const subject = req.body.subject;
    const content = new helper.Content('text/html', emailContent({ firstName: req.body.firstName }));
    const mail = new helper.Mail(fromEmail, subject, toEmail, content);

    const sg = require('sendgrid')(APIkey);
    const request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });



    sg.API(request, function(error, response) {
        if (error) {
            console.log('Error response received');
        }
        console.log(response.statusCode);
    });
    console.log('mail has been sent.');
    next();
};