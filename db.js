const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gcordeiro609:tz4Rywv7yLktXPco@datalimite.saosgde.mongodb.net/?retryWrites=true&w=majority')
mongoose.Promise = global.Promise;

module.exports = mongoose;