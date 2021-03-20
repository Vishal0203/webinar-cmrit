const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'shhhh, very secret'
}));

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/users/login');
  }
}, (req, res) => {
  const { user } = req.session;
  res.render('index', { username: user.username });
})

app.use('/users', require('./controllers/user.controller'));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
