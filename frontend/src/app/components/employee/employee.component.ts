import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models/employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeArr: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getEmployees();
    this.generateEmployeeForm();
  }
  generateEmployeeForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      office: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  getEmployees(): void {
    this.employeeService.getEmployees$().subscribe(data => {
      this.employeeArr = data;
    });
  }

  submitEmployees(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    // console.log(this.employeeForm.value);
    this.employeeService.submitEmployees$(this.employeeForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.getEmployees();
      },
      (err: any) => console.log(err)
    );
  }


}
