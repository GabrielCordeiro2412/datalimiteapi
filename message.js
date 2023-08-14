const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: String,
    user: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message };
