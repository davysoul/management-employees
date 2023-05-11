import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employeeSlice",
    initialState:{
        employeeList: [],
    },
    reducers:{
        setEmployeeList:(currentSlice,action)=>{
            currentSlice.employeeList = action.payload;
        },
        addEmployee:(currentSlice,action)=>{
            currentSlice.employeeList.push(action.payload);
        },
        updateEmployee:(currentSlice,action)=>{
            const index = currentSlice.employeeList.findIndex((employee)=>employee.id === action.payload.id);
            currentSlice.employeeList[index] = action.payload;
        },
        deleteEmployee:(currentSlice,action)=>{
           const filteredList = currentSlice.employeeList.filter((employee)=> employee.id !== action.payload.id);
           createSlice.employeeList = filteredList;
        }
    }
});
export const employeeReducer = employeeSlice.reducer;
export const {setEmployeeList,addEmployee,updateEmployee,deleteEmployee} = employeeSlice.actions;