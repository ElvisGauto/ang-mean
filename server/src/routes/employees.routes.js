const { Router } = require('express')
const router = Router()

const employesController = require('../controllers/employees.controller.js')

// CRUD
// CREATE - READ - UPDATE - DELETE

router.get('/', employesController.getEmployes)
router.post('/', employesController.createEmployee)
router.get('/:id', employesController.getEmployee)
router.put('/:id', employesController.updateEmployee)
router.delete('/:id', employesController.deleteEmployee)


module.exports = router 