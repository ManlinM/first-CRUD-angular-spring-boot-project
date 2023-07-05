import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL ="http://localhost:8080/api/v1/employees";

  constructor(private httpClient:HttpClient) { 

    /**
     * declare dependencies in a class's constructor and have
     *  the necessary dependencies automatically provided 
     * when an instance of the class is created
     * 
     * By injecting HttpClient into the service's constructor,
     *  you are telling Angular that the service requires an instance
     *  of HttpClient to perform HTTP requests.
     * 
     */
  }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee:Employee):Observable<Object>{
    //sending the JSON/employee obj to the URL
    return this.httpClient.post(this.baseURL,employee);
  }

  //get employee by id
  //then pass that emp to the update
  getEmployeeById(employeeId:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }

  //set the emp which was retrieved by id above
  updateEmployee(employeeId:number,employee:Employee):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${employeeId}`,employee);
  }

  //delete employee
  deleteEmployee(employeeId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${employeeId}`);
   }
 
}
