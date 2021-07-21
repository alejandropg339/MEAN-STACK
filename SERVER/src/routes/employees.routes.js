const {Router} = require('express');
const employeesCtrl = require('../controllers/employees.controller');

const router = Router();

router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);


module.exports = router;