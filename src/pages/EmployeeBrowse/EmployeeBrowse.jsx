
import { useSelector } from 'react-redux'
import ListEmployee from '../../components/listEmployee/ListEmployee'
import React, { useState } from 'react'
import s from './style.module.css';
import SearchBar from '../../components/searchBar/SearchBar';
import { Link } from 'react-router-dom';

const EmployeeBrowse = (props) => {
  const [searchText,setSearchText] = useState("");
  const employeeList = useSelector((store)=> store.EMPLOYEE.employeeList);
  
  const filteredList = employeeList.filter((employee)=>{
    const containtFirstname = employee?.firstname.trim().toUpperCase().includes(searchText.toUpperCase());
    const containLastname   = employee?.lastname.trim().toUpperCase().includes(searchText.toUpperCase()) ;
                             
                    return containtFirstname ||containLastname;      
  })

 

  return (
    <>
        <div className='row justify-content-center '>
          <div className='col-sm-12 col-md-10 mb-5'>
              <SearchBar placeholder ="Search your employees.." onTextChange={setSearchText}/>
          </div>
          
        </div>
        {
        employeeList?.length === 0 &&(
          <div className='d-flex justify-content-center'>
            <span>
              Il n ya pas des employes,veuillez vous en <Link to="/employee/new" style={{color:"blue",fontSize:"bold"}}>
                ajouter </Link>
            </span>
          </div>
        )
      }
        <ListEmployee employeeList ={filteredList}/>
    </>
  )
}

export default EmployeeBrowse