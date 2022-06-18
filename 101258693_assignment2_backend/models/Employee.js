import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname : String,
        emailid: String
    }
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;