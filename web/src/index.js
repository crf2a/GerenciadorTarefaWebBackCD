const express = require('express');

const servidor = express();

const cors = require('cors');

servidor.use(express.json());
servidor.use(cors());

const TaskRouters = require('./routes/TaskRoutes');

servidor.use('/task', TaskRouters);

servidor.listen(3333)