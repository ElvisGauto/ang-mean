import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:9000/api/employees/';

  constructor(
    private http: HttpClient
  ) { }

  getEmployees$(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  submitEmployees$(employee: Employee): any {
    this.http.post(this.URL_API, employee);
  }
}
