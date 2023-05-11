import { EMPLOYEEAPI } from '../../api/employee-api';
import EmployeeForm from '../../components/employeeForm/EmployeeForm';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateEmployee ,deleteEmployee} from '../../store/employee/employee-slice';

const Employee = () => {
  const [isEditable,setIsEditable] = useState(false);
  const {employeeId} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector(store =>store.EMPLOYEE.employeeList.find(employee=> employee.id ===employeeId) );
  async function submit(formValues){
    const updatedEmployee = await EMPLOYEEAPI.update({...formValues,id:employee.id})
    dispatch(updateEmployee(updatedEmployee));
    setIsEditable(false);
    // navigate("/");
  }
  const deleteOneEmployee = (employee)=>{
    if(window.confirm("Voulez-vous supprimer cet employe?")){
      EMPLOYEEAPI.deleteById(employee.id);
      dispatch(deleteEmployee(employee));
      navigate("/");
    }
    
  }
  return (
    <>
      {
      employee &&
      <EmployeeForm 
      isEditable={isEditable}
      title={isEditable ? "Edit employee":""}
      employee ={employee}
      onClickEdit={()=>setIsEditable(!isEditable)}
      onClickTrash={()=>deleteOneEmployee(employee)}
      onSubmit={isEditable && submit}
      />}
    </>
  )
}

export default Employee