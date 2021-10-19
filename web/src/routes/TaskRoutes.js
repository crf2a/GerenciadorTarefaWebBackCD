const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

router.post('/task', TaskController);

module.exports = router;
