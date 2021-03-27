require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const middlewares = require('./middlewares/auth.middleware');
const app = express();
const PORT = 3000;

// built-in or third-party middlewares
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'shhhh, very secret',
  expires: Date.now() + (30 * 86400 * 1000)
}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configs
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', middlewares.restrict, (req, res) => {
  const { user } = req.session;
  res.render('index', { username: user.username });
})

app.get('/signout', middlewares.restrict, (req, res) => {
  if (req.session.user) {
    req.session.destroy(() => {
      res.redirect('/users/signin')
    })
  }
})

// routes to controller
app.use('/users', middlewares.isAuthenticated, require('./controllers/user.controller'));
app.use('/api', middlewares.restrict, require('./controllers/api.controller'));

// server start
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
