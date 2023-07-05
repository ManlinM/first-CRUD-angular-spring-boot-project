import { Component } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employee: Employee={firstName:'',lastName:'',emailId:''};
  empId:number;
  //inject service and route
  constructor(private employeeService:EmployeeService,
    private router:Router, private route: ActivatedRoute){
    
  }

  ngOnInit(){
    //get it from the route
    //activaterout
    this.empId=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.empId).subscribe(data=>{
      this.employee=data;
      console.log(data);
  })
 

  }
  saveEmployee(){
    this.employeeService.updateEmployee(this.empId,this.employee).subscribe(data=>{
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
