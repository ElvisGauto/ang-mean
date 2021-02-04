import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models/employee.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeArr: Employee[] = [];

  constructor(
    public employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees$().subscribe(data => {
      this.employeeArr = data;
    });
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.updateEmployee$(form.value).subscribe(
        (res: any) => { 
          this.getEmployees();
          form.reset();
        },
        (err: any) => console.log(err)
      );
    } else {
      this.employeeService.createEmployees$(form.value).subscribe(
        (res: any) => { 
          this.getEmployees();
          form.reset();
        },
        (err: any) => console.log(err)
      );
    }
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee$(id).subscribe(
      () => {
        this.getEmployees();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  resetForm(form: NgForm) {
    form.reset();
  }

}
