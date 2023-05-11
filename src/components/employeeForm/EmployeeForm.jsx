import React, { useState } from 'react'
import s from './style.module.css';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import ButtonPrimary from '../../components/button/ButtonPrimary';
import { ValidatorsService } from '../../services/form-validators';
const VALIDATORS = {
  firstname:(value)=>{
    ValidatorsService.min(value,3);
  },
  lastname:(value)=>{
    ValidatorsService.min(value,3);
  },
  email:(value)=>{
    ValidatorsService.min(value,5);
  }
}
const EmployeeForm = ({
  isEditable ,
  employee,
  title,
  onClickEdit,
  onClickTrash,
  onSubmit}) => {
  const[formValues,setFormValues] = useState({
    firstname:employee?.firstname || "",
    lastname:employee?.lastname || "",
    email:employee?.email || ""
  });
  function updateFormValue(e){
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
    const actionsIcons  =  
    <>
     <div className='col-1'>
      {onClickEdit && <PencilFill className={s.icon} onClick={onClickEdit}/>}
       
     </div>
     <div className='col-1'>
      {onClickTrash && <TrashFill className={s.icon} onClick={onClickTrash}/>}
       
     </div>
    </>;
    const firstnameInput =  <>
    <label className='form-label'>Firstname</label>
    
    <input type='text' name='firstname' className={`form-control ${s.input}`} onChange={updateFormValue} value={formValues.firstname}/>
    </>;
    const lastnameInput =  <>
      <label className='form-label'>Lastname</label>
      <input type='text' name='lastname' className={`form-control ${s.input}`} onChange={updateFormValue} value={formValues.lastname}/>
    </>;
    const emailInput = <>
     <label className='form-label'>Email</label>
     <input type='email' name='email' className={`form-control ${s.input}`} placeholder='example@gmail.com' onChange={updateFormValue} value={formValues.email}/>
    </>;
    const submitButton = <div className={s.submit_btn}>
      <ButtonPrimary className={s.btn} onClick={()=>onSubmit(formValues)}>Submit</ButtonPrimary>
      
    </div>;
  return (
    <form className={s.container}>
        <div className='row justify-content-space-between'>
            <div className='col-10'>
              <h2 className='mb-3'>{title}</h2>
            </div>
            {actionsIcons}
        </div>
        <div className='mb-3'>{isEditable ? firstnameInput :employee.firstname}</div>
       
        <div className='mb-3'>{isEditable ? lastnameInput : employee.lastname}</div>
        
        <div className='mb-3'>{isEditable ? emailInput : employee.email}</div>
        
        {onSubmit && submitButton}
    </form>
  )
}

export default EmployeeForm