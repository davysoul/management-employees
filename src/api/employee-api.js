import axios from "axios";

const BASE_URL ="http://localhost:8080/api/v1/employees";

export class EMPLOYEEAPI{
    static async create(employee){
     return await axios.post(`${BASE_URL}/new`,employee).data;
    }
    static async fetchAll(){
        return (await axios.get(`${BASE_URL}/all`)).data.map(this.formatId);
    }
    static async fetchById(employeeId){
        return this.formatId((await axios.get(`${BASE_URL}/${employeeId}`)).data);
    }
    static async deleteById(employeeId){
        return (await axios.delete(`${BASE_URL}/delete/${employeeId}`)).data;
    }
    static async update(employee){
        return this.formatId((await axios.patch(`${BASE_URL}/update/${employee.id}`,employee)).data);
    }
    static formatId(employee){
        return {
            ...employee,
            id:employee.id.toString()
        }
    }
}