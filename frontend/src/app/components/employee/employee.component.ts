import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models/employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup[] = [];
  employeeArr: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getEmployees();
    this.generateEmployeeForm();
  }

  getEmployees(): void {
    this.employeeService.getEmployees$().subscribe(data => {
      this.employeeArr = data;
    });
  }

  generateEmployeeForm(): void {
    // this.employeeForm  = this.fb.group({
    //   name: '',
    //   position: '',
    //   office: '',
    //   salary: ''
    // });
  }

}
