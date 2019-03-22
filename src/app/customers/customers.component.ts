import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }
  // dataSource = new CustomersDataSource(this.dataSource);
  ngOnInit() {
  }

}
