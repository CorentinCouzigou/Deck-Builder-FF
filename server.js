const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const router = require('./app/router');
const PORT = process.env.PORT || 1234;
const mongoDBClient = require('./app/database')
const expressSession = require('express-session');
const sanitizer = require('sanitizer');
const multer = require('multer');
const bodyParser = multer();

app.use(bodyParser.none());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  for (const key in req.body) {
    req.body[key] = sanitizer.escape(req.body[key]);
  }
  next();
});


app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('public'));


app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SECRET,
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60)
  }
}));
app.use((request, response, next) => {
  if (!request.session.deck) {
    request.session.deck = []
  }
  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur connecté http://localhost:${PORT}`);
  mongoDBClient.initialize();
});
