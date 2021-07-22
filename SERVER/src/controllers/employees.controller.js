const employeeCtrl = {};

const Employee = require('../models/employee');

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee (req.body);

    await newEmployee.save();
    
    res.json({msg: 'Successfully employee created'});
}

employeeCtrl.getEmployee = async (req, res) => {

    const employee = await Employee.findById(req.params.id);

    res.json(employee);
     
    
}

employeeCtrl.editEmployee = async (req, res) => {

    await Employee.findByIdAndUpdate(req.params.id, req.body);

    res.json({msg: 'Successfully updated employee'})

}

employeeCtrl.deleteEmployee = async (req, res) => {

    await Employee.findByIdAndDelete(req.params.id);

    res.send({msg: "Successfully employee deleted"})
    
}


module.exports = employeeCtrl;