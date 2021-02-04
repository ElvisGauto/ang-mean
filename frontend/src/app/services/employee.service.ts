import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:9000/api/employees/';

  selectedEmployee: Employee = {
    _id:  '',
    name: '',
    position: '',
    office: '',
    salary: 0
  };

  constructor(
    private http: HttpClient
  ) { }

  getEmployees$(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  createEmployees$(employee: Employee): any {
    return this.http.post(this.URL_API, employee);
  }

  deleteEmployee$(id: string) {
    return this.http.delete(this.URL_API + `${id}`);
  }

  updateEmployee$(employee: Employee) {
    return this.http.put(this.URL_API + `${employee._id}`, employee);
  }
}
