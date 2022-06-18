/* eslint-disable import/no-anonymous-default-export */
export default (employees = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...employees, action.payload];
        case 'FETCH_BY_ID':
            return employees.map((employee) => employee._id === action.payload._id ? action.payload : employees);
        case 'UPDATE':
            return employees.map((employee) => employee._id === action.payload._id ? action.payload : employees);
        case 'DELETE':
            return employees.filter((employee) => employee._id !== action.payload );
        default:
            return employees;
    }
}