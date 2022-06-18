import * as React from 'react';
import Button from '@mui/material/Button';
import { useSelector } from'react-redux';

import { deleteEmployee } from '../actions/employees.js';
import { useDispatch } from 'react-redux';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import { TableCell } from '@mui/material';


const RecordsTable = (props) => {
  const { setSelectedEmployeeId, setDetailsDialogOpen } = props;
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleDetailsClick = (id) => {
    setSelectedEmployeeId(id);
    setDetailsDialogOpen(true);
  }

  const renderButtons = (params) => {
    return (
        <strong>
            <Button sx={{"&.MuiButton-text": { color: 'blue' }}} size="small" onClick={() => {handleDetailsClick(params._id)}}>
                Details
            </Button>
            <Button sx={{"&.MuiButton-text": { color: 'red' }}} size="small" onClick={() => dispatch(deleteEmployee(params._id))}>
                Delete
            </Button>
        </strong>
    )
  }

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row._id}</TableCell>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.emailid}</TableCell>
              <TableCell align="right">{ renderButtons(row) }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>

  );
}

export default RecordsTable;
