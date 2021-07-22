import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees();

  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => { console.log(err) }
    );
  }

  addEmployee(form: NgForm) {

    if (form.value._id) {
      this.employeeService.editEmployee(form.value)
      .subscribe(res => {
        console.log(res)
        this.getEmployees();
        form.reset();
      },
      err => { console.log(err) });
    } else {
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => { console.log(err) }
      )
    }

  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want delete it?')) {
      this.employeeService.deleteEmployee(id)
        .subscribe(
          res => {
            console.log(res);
            this.getEmployees();
          },
          err => { console.log(err) }
        );
    }

  }

  editEmployee(employee: Employee) {
    if (confirm(`Are you sure you want to edit this employee?`)) {
      this.employeeService.selectedEmployee = employee;
    }
  }

  cleanForm(form: NgForm) {
    form.reset();
  }

}
