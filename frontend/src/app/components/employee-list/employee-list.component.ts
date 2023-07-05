import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private employeeService:EmployeeService, private router:Router,
    private reportService:ReportService){//injecting the service

  }

  ngOnInit():void{
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeesList()
    .subscribe(data=>{
      //sorting the retrieved data by id
      //otherwise angular auto append the updated to the last 
      data.sort((a, b) => a.id - b.id);
      
      this.employees=data;
    })
  }
 
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);//navigated to update page
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      //call getEmployee() to update the list
      this.getEmployee();
    })
  }

  viewEmployee(id:number){
    this.router.navigate(['employee-details',id]);
  }

  generateReport(){
    this.reportService.generateReport().subscribe((response: Blob) => {
      const file = new Blob([response], { type: 'application/pdf' }); // Modify the type based on your exportFileType
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL); // Open the file in a new window/tab
    });
  }
}
