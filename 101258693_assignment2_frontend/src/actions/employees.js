import { FETCH_ALL, CREATE, FETCH_BY_ID, UPDATE, DELETE } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getEmployees = () => async (dispatch) => {
    try {
        const {data} = await api.fetchEmployees();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createEmployee(employee);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getEmployeeById = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchEmployeeById(id);
        dispatch({ type: FETCH_BY_ID, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateEmployee = (id, employee) => async (dispatch) => {
    try {
        const { data } = await api.updateEmployee(id, employee);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        await api.deleteEmployee(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}