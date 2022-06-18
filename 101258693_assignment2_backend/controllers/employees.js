import mongoose from 'mongoose';
import Employee from '../models/Employee.js';

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createEmployee = async (req, res) => {
    const employee = req.body;
    console.log(req);

    const newEmployee = new Employee(employee);

    try {
       await newEmployee.save();
       res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
} 

export const getEmployee = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No employee record with that id');

    const employee = await Employee.findById(id);

    res.status(200).json(employee);
} 

export const updateEmployee = async (req, res) => {
    const { id: _id } = req.params;
    const employee = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No employee record with that id');

    const updatedEmployee = await Employee.findByIdAndUpdate(_id, { ...employee, _id }, { new: true });

    res.status(200).json(updatedEmployee);
} 

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No employee record with that id');

    await Employee.findByIdAndRemove(id);

    res.status(204).json({ message: 'Employee record deleted successfully' });
} 