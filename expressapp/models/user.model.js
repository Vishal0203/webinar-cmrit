const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  hash: {type: String, required: true, unique: true},
  firstName: {type: String},
  lastName: {type: String},
  createdOn: {type: String, default: Date.now}
});

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
      delete ret.password;
  }
});

module.exports = mongoose.model('User', schema);
