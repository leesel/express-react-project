const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/catsDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

const db = mongoose.connection

module.exports = db
