const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const compression = require('compression');
const cors = require('cors');
const handlebars = require('handlebars');
const expHbs = require('express-handlebars');
const morgan = require('morgan');

const app = express();

app.engine('.hbs', expHbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/routes/mailer/views');

//DB connect~~~~~~~~~~~~~~~~~~~~
mongoose.connect('localhost:27017/visionair');



//Express setup~~~~~~~~~~~~~~~~~
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
app.use((err, req, res, next) => {
    console.log(err);
    next(err);
})


app.use(express.static(path.join(__dirname, 'public')));

app.use(compression());
app.use('/', require('./routes'));

const port = process.env.PORT || 8080;

let ascii = port + " VisionAir is up in the clouds       (  )\n" + "          _ .                         ( `  ) . )\n" + "        (  _ )_                      (_, _(  ,_)_)\n" + "      (_  _(_ ,)";


const server = app.listen(port, function() {
    console.log(ascii);
});
