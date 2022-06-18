import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../../actions/employees.js';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const EmployeeCreateDialog = (props) => {
  const { onClose, open } = props;
  const dispatch = useDispatch();

  const [employeeData, setEmployeeData] = React.useState({ firstname: '', lastname: '', emailid: ''});

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createEmployee(employeeData));
      clear();
      onClose();
  }

    const clear = () => {
      setEmployeeData({ firstName: '', lastName: '', email: ''});
    }

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Create new record</DialogTitle>
      <Box sx={{padding: 3}}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField required name="firstname" variant="outlined" label="First Name" fullWidth value={employeeData.firstname} onChange={(e) => setEmployeeData({ ...employeeData, firstname: e.target.value })}/>
          <TextField required sx={{marginTop: 2, marginBottom: 2}} name="lastname" variant="outlined" label="Last Name" fullWidth value={employeeData.lastname} onChange={(e) => setEmployeeData({ ...employeeData, lastname: e.target.value })}/>
          <TextField required type='email' name="emailid" variant="outlined" label="Email" fullWidth value={employeeData.emailid} onChange={(e) => setEmployeeData({ ...employeeData, emailid: e.target.value })}/>
          <Box paddingTop={2}>
            <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
            <Button fullWidth variant="contained" color="secondary" onClick={ () => clear()}>Clear</Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
}

export default EmployeeCreateDialog;