const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const router = require('./app/router');
const PORT = process.env.PORT || 1234;
const mongoDBClient = require('./app/database')
// const expressSession = require('express-session');

// app.use(expressSession ({
//   resave: true,
//   saveUninitialized: true,
//   secret:process.env.SECRET,
//   cookie: {
//       secure: false,
//       maxAge: (1000*60*60)
//   }
// }));
// app.use((request, response, next) => {
//   let deck = null;
//   if (request.session.deck) {
//       deck = request.session.deck;
//   }
//   response.locals.deck = deck;
//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur connecté http://localhost:${PORT}`);
  mongoDBClient.initialize();
});
