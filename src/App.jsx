import { EMPLOYEEAPI } from "./api/employee-api"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setEmployeeList } from "./store/employee/employee-slice";
import Header from "./components/header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import s from './style.module.css'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function fetchAll(){
    const employeeList = await EMPLOYEEAPI.fetchAll();
    dispatch(setEmployeeList(employeeList));
    // navigate("/");
  }
 useEffect(()=>{
  fetchAll();
 })
  return (
    <div className="container-fluid">
      <Header/>
      <div className={s.outlet_container}>
      <Outlet/>
      </div>
      
    </div>
  )
}

export default App
