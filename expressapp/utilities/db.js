const mongoose = require('mongoose');
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose.connect('mongodb://localhost:27017/expressapp', connectionOptions);

module.exports = {
  User: require('../models/user.model'),
}
