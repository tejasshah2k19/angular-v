import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(model):Observable<any>{
    return this.http.post("http://dummy.restapiexample.com/api/v1/create",model);
  }

  getEmployees():Observable<any>{
    return  this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  } 

}
