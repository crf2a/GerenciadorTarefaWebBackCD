const express = require('express');

const server = express();

server.get('/api', (req, res) => {
    res.send('ESTUDE MAIS!')
});

server.listen(3000)
