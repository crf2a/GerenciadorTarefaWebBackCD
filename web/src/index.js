const express = require('express');

const servidor = express();

servidor.use(express.json());

const TaskRouters = require('./routes/TaskRoutes');

servidor.use('/task', TaskRouters);

servidor.listen(3000)