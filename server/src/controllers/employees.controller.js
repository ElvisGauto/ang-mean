const employeesCtrl = {};

employeesCtrl.getEmployes = (req, res) => {
    res.send('get employees')
}
employeesCtrl.createEmployee = (req, res) => {
    res.send('create employee')
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