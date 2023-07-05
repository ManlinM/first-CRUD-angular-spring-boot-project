import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee={firstName:'',lastName:'',emailId:''};

  constructor(private employeeService:EmployeeService,private router:Router){

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      this.goToEmployeeList();
      console.log(data);
    },
    error=>console.log(error)
    );
  }

  //once new data submit, NAVIGATE to the emp list page
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    this.saveEmployee();
    
  }
}
