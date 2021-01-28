const employeesCtrl = {};

const Employee = require('../models/Employee');

employeesCtrl.getEmployes = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}
employeesCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);

    await newEmployee.save();
    res.send({message: 'employee created'})
}
employeesCtrl.getEmployee = (req, res) => {
    res.send('get employee')
}
employeesCtrl.updateEmployee = (req, res) => {
    res.send('update employee')
}
employeesCtrl.deleteEmployee = (req, res) => {
    res.send('delete employee')
}

module.exports = employeesCtrl