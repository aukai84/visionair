const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

const morgan = require('morgan');

const app = express();

//DB connect~~~~~~~~~~~~~~~~~~~~
mongoose.connect('mongodb://localhost:visionair');


//Express setup~~~~~~~~~~~~~~~~~
app.use(morgan('dev'));


app.use('/', require('./routes'));

const port = process.env.PORT || 3000;

let ascii ="VisionAir is up in the clouds            (  )\n"+"          _ .                         ( `  ) . )\n"+"        (  _ )_                      (_, _(  ,_)_)\n"+"      (_  _(_ ,)";                                           


const server = app.listen(port, function() {
    console.log(ascii);
    console.log(mongoose.connection.readyState);
});