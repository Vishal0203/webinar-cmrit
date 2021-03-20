const restrict = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/users/signin');
  }
}

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = {
  restrict,
  isAuthenticated
};
