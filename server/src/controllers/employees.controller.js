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
employeesCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeesCtrl.updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'employee updated'})
}
employeesCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.send({message: 'employee deleted'})
}

module.exports = employeesCtrl