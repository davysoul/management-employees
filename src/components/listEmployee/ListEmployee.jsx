import React from 'react'
import s from './style.module.css'
import TextCard from '../textCard/TextCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EMPLOYEEAPI } from '../../api/employee-api';
import { deleteEmployee } from '../../store/employee/employee-slice';

const ListEmployee = ({employeeList}) => {
  //const employeeList = useSelector((store)=> store.EMPLOYEE.employeeList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteOneEmployee = async (employee)=>{
   if(window.confirm("Voulez-vous supprimer cet employe?")){
    await EMPLOYEEAPI.deleteById(employee.id);
    dispatch(deleteEmployee(employee));
    navigate("/");
   } 
   
  }
  return (
    <div className={`row justify-content-center`}>
      {
       
        employeeList.map((employee)=>{
          return (
            <div key={employee?.id}  className= {s.card_container} >
              <TextCard 
              firstname={employee?.firstname}
              lastname={employee?.lastname} 
              email={employee?.email}
              onClick={()=>navigate("/employee/" +employee?.id)}
              onClickTrash={()=>deleteOneEmployee(employee)}
              />
            </div>
          )
        })
      }

    </div>
  )
}

export default ListEmployee