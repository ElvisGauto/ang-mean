const { Router } = require('express');
const router = Router();

const employesController = require('../controllers/employees.controllers');

// CRUD
// CREATE - READ - UPDATE - DELETE

router.get('/hello', employesController);

module.exports = router; 