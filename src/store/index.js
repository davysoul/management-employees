import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employee/employee-slice";
const store = configureStore({
    reducer:{
        EMPLOYEE: employeeSlice.reducer,
    },
})
export{store}