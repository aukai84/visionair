const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compression = require('compression');
const cors = require('cors');

const morgan = require('morgan');

const app = express();

//DB connect~~~~~~~~~~~~~~~~~~~~
mongoose.connect('localhost:27017/visionair');


//Express setup~~~~~~~~~~~~~~~~~
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(express.static(path.join(__dirname, 'public')));



app.use(compression());
app.use(cors());

app.use('/', require('./routes'));


const port = process.env.PORT || 3000;

let ascii ="VisionAir is up in the clouds            (  )\n"+"          _ .                         ( `  ) . )\n"+"        (  _ )_                      (_, _(  ,_)_)\n"+"      (_  _(_ ,)";                                           


const server = app.listen(port, function() {
    console.log(ascii);
});