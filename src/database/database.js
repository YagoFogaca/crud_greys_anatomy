const mongoose = require('mongoose');

function connectDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/greys-anatomy', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(`Error connected to database. Error: ${err}`));
}

module.exports = connectDatabase;
