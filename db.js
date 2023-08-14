const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gcordeiro609:lpu2XVKVRqxqefMz@datalimite.bjfhou9.mongodb.net/?retryWrites=true&w=majority')
mongoose.Promise = global.Promise;

module.exports = mongoose;