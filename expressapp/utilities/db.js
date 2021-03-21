const mongoose = require('mongoose');
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose.connect(
  `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/expressapp?authSource=expressapp`,
  connectionOptions
);

module.exports = {
  User: require('../models/user.model'),
}
