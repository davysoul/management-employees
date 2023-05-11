import { useDispatch } from 'react-redux';
import EmployeeForm from '../../components/employeeForm/EmployeeForm'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {EMPLOYEEAPI} from '../../api/employee-api';
import { addEmployee } from '../../store/employee/employee-slice';

const EmployeeCreate = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function createEmployee(formValues){
    const createdEmployee = await EMPLOYEEAPI.create(formValues);
    dispatch(addEmployee(createdEmployee));
    navigate("/");
   }
  return (
    <div>
      <EmployeeForm title="Create an employee" onSubmit ={createEmployee} isEditable={true}/>
    </div>
  )
}

export default EmployeeCreate