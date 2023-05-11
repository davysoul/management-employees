import Logo from '../logo/Logo'
import React from 'react'
import s from './style.module.css'
import ButtonPrimary from '../button/ButtonPrimary'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
        <div className={`col-xs-12 col-sm-4 ${s.logo}`}>
          <Logo title = "ManagementEmployee" subtitle = "Manage your employees" onClick={()=>navigate("/")}/>
        </div>
        <div className='col-xs-12 col-sm-8  text-end'>
           <ButtonPrimary onClick={()=>navigate("/employee/new")} >
             Add employee +
           </ButtonPrimary>
        </div>
    </div>
  )
}

export default Header