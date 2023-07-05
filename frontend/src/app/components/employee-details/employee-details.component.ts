import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
id:number;

employee: Employee={firstName:'',lastName:'',emailId:''};

constructor(private route:ActivatedRoute,private employeeService:EmployeeService){

}

ngOnInit(){
  this.id=this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;
  })
}
}
