import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees:Array<Employee> 
  constructor(private employeeSerice:EmployeeService) { }

  ngOnInit() {
    console.log("eS "+this.employeeSerice)
    this.employeeSerice.getEmployees().subscribe(res=>{
      console.log("res = >"+res)
      this.employees = res; 
    })
  }

}
