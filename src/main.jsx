import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './store/index';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeeBrowse from './pages/EmployeeBrowse/EmployeeBrowse';
import Employee from './pages/Employee/Employee';
import EmployeeCreate from './pages/employeeCreate/EmployeeCreate';
import PageNotFound from './pages/pageNotFound/PageNotFound';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/' element={<EmployeeBrowse/>}/>
            <Route path='/employee/:employeeId' element={<Employee/>}/>
            <Route path='/employee/new' element={<EmployeeCreate/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
         </Routes>
      </BrowserRouter>
    </Provider> 
  
)
