const express = require('express');
const cors = require('cors');
const { Message } = require('./message');
require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages.map(message => message.content));
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/messages/create', async (req, res) => {
    const { user, message } = req.body;
    try {
        await Message.create({ content: message, user: user });
        res.json({ success: true });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/messages/:index', async (req, res) => {
    const { index } = req.params;
    try {
        const messages = await Message.find();
        if (index >= 0 && index < messages.length) {
            await Message.deleteOne({ _id: messages[index]._id });
            res.json({ success: true });
        } else {
            res.status(400).json({ error: 'Invalid index' });
        }
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
