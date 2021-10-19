const express = require('express');

const server = express();

servidor.use(express.json());

const TaskRouters = require('./routes/TaskRoutes');

servidor.use('/task', TaskRouters);

server.listen(3000)