const db = require('../database/models/index.js');
const Employee = db.employees;


const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { name, email, age, department, salary, status } = req.body;
    const employee = await Employee.create({ name, email, age, department, salary, status });
    res.status(201).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, email, age, department, salary, status } = req.body;
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      employee.name = name;
      employee.email = email;
      employee.age = age;
      employee.department = department;
      employee.salary = salary;
      employee.status = status;
      await employee.save();
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      await employee.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
  };
  