const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToMongo = require('./db');
const User = require('./models/User');
const server = express();

server.use(cors());
server.use(bodyParser.json())

connectToMongo()

server.listen(5000, () => {
    console.log('server started');
})

server.post('/test', async (req, res) => {
    const user = new User();
    user.name = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    const doc = await user.save();
    console.log(req.body);
    res.json(doc);
})

