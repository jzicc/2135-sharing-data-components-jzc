import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public employees = [];
  public products = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
