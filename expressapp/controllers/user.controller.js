const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../utilities/db');
const User = db.User;

// routes
router.get('/signin', renderSignin);
router.get('/signup', renderSignup);
router.post('/signup', create);
router.post('/signin', signIn);

// constroller functions
async function authenticate(username, password) {
  const user = await User.findOne({ username });

  if (user && bcrypt.compareSync(password, user.hash)) {
    return user.toJSON();
  }
}

async function create(req, res) {
  if (await User.findOne({ username: req.body.username }).lean()) {
    res.status(400).send(`Username ${req.body.username} is already taken`);
    return;
  }

  const user = new User(req.body);
  if (req.body.password) {
    user.hash = bcrypt.hashSync(req.body.password, 10);
  }

  await user.save();
  signIn(req, res);
}

async function signIn(req, res) {
  const user = await authenticate(req.body.username, req.body.password);

  if (user) {
    req.session.regenerate(() => {
      req.session.user = user;
      res.redirect('/');
    })
  } else {
    res.redirect('/users/signin');
  }
}

function renderSignin(req, res) {
  res.render('signin');
}

function renderSignup(req, res) {
  res.render('signup');
}

module.exports = router;
