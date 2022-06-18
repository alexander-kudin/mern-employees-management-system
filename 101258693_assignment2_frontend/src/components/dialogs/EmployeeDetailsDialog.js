import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';

const EmployeeDetailsDialog = (props) => {
  const { onClose, open, employeeId, setUpdateDialogOpen } = props;

  const selectedEmployee = useSelector((state) => employeeId ? state.employees.find((p) => p._id === employeeId) : null);

  const handleUpdateClick = () => {
    onClose();
    setUpdateDialogOpen(true);
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{`${selectedEmployee?.firstname} ${selectedEmployee?.lastname}`}</DialogTitle>
      <List>
      <ListItem>
          <ListItemText primary={`ID: ${selectedEmployee?._id}`}/>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Email: ${selectedEmployee?.emailid}`}/>
        </ListItem>

        <ListItem>
          <Button fullWidth variant="outlined" onClick={ handleUpdateClick } startIcon={<EditIcon />}>
            Update Record
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default EmployeeDetailsDialog;