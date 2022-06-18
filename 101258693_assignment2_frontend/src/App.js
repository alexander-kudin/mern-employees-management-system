import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getEmployees } from './actions/employees.js';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import RecordsTable from './components/RecordsTable.js';
import EmployeeDetailsDialog from './components/dialogs/EmployeeDetailsDialog.js'
import EmployeeUpdateDialog from './components/dialogs/EmployeeUpdateDialog.js'
import EmployeeCreateDialog from './components/dialogs/EmployeeCreateDialog.js'

const App = () => {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)

  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
    console.log('ABOBA')
  }, [selectedEmployeeId, dispatch, detailsDialogOpen, updateDialogOpen, createDialogOpen]);

  return (
    <Box>
      <Header />
      <Box component="main" sx={{ overflow: 'auto' }}>
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
          <Box style={{width: '100%', display: 'flex', justifyContent:'space-between', marginBottom: 20, alignItems:'center'}}>
              <Typography style={{display:'inline'}} component="h2" variant="h6">Employees Records</Typography>
              <Button variant="outlined" onClick={ () => setCreateDialogOpen(true) }>Add Employee</Button>
          </Box>
          <Paper sx={{height: "60vh"}}>
            <RecordsTable setSelectedEmployeeId={setSelectedEmployeeId} setDetailsDialogOpen = {setDetailsDialogOpen} />
          </Paper>
          <EmployeeDetailsDialog open={detailsDialogOpen} employeeId={selectedEmployeeId} onClose={() => setDetailsDialogOpen(false)} setUpdateDialogOpen = {setUpdateDialogOpen}/>
          <EmployeeUpdateDialog open={updateDialogOpen} employeeId={selectedEmployeeId} onClose={() => setUpdateDialogOpen(false)}/>
          <EmployeeCreateDialog open={createDialogOpen} onClose={() => setCreateDialogOpen(false)}/>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
