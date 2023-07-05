import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
//Defining routes
//syntax, path:url,component:which component to use
{path:'employees',component:EmployeeListComponent},
{path:'create-employee',component:CreateEmployeeComponent},
{path:'update-employee/:id',component:UpdateEmployeeComponent},
{path:'employee-details/:id',component:EmployeeDetailsComponent},
{path:'',redirectTo:'employees',pathMatch:'full'}
//full means the the entire URL MUST match the specified path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//take the routes array
  exports: [RouterModule]
})
export class AppRoutingModule { }
