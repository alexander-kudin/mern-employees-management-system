import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../../actions/employees.js';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const EmployeeCreateDialog = (props) => {
  const { onClose, open, employeeId } = props;
  const dispatch = useDispatch();
  const selectedEmployee = useSelector((state) => employeeId ? state.employees.find((p) => p._id === employeeId) : null);
  const [employeeData, setEmployeeData] = React.useState({ firstname: '', lastname: '', emailid: ''});

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateEmployee(employeeId, employeeData));
      onClose();
  }

  const clear = () => {
    setEmployeeData({ firstName: '', lastName: '', email: ''});
  }

  React.useEffect(() => {
    if(selectedEmployee) setEmployeeData(selectedEmployee);
  }, [selectedEmployee])

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Update record</DialogTitle>
      <Box sx={{padding: 3}}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField required name="firstname" variant="outlined" label="First Name" fullWidth value={employeeData.firstname} onChange={(e) => setEmployeeData({ ...employeeData, firstname: e.target.value })}/>
          <TextField required sx={{marginTop: 2, marginBottom: 2}} name="lastname" variant="outlined" label="Last Name" fullWidth value={employeeData.lastname} onChange={(e) => setEmployeeData({ ...employeeData, lastname: e.target.value })}/>
          <TextField required type='email' name="emailid" variant="outlined" label="Email" fullWidth value={employeeData.emailid} onChange={(e) => setEmployeeData({ ...employeeData, emailid: e.target.value })}/>
          <Box paddingTop={2}>
            <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
            <Button fullWidth variant="contained" color="secondary" onClick={clear}>Clear</Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}

export default EmployeeCreateDialog;