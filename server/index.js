const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const handlebars = require('handlebars');
const expHbs = require('express-handlebars');
const morgan = require('morgan');
const config = require('./config');

const app = express();

app.engine('.hbs', expHbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/routes/mailer/views');

//DB connect~~~~~~~~~~~~~~~~~~~~
mongoose.connect('localhost:27017/visionair');



//Express setup~~~~~~~~~~~~~~~~~
//add to config sessionKey string
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: config.sessionKey,
    name: 'sessionId',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
        maxAge: 10 * 60 * 1000,
        httpOnly: true
    }
}));

//basic security package. 
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));



app.use(compression());
app.use(cors());

app.use('/', require('./routes'));

const port = process.env.PORT || 8080;

let ascii = port + " VisionAir is up in the clouds       (  )\n" + "          _ .                         ( `  ) . )\n" + "        (  _ )_                      (_, _(  ,_)_)\n" + "      (_  _(_ ,)";


const server = app.listen(port, function() {
    console.log(ascii);
});