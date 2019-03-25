import { NewCustomerComponent } from './../new-customer/new-customer.component';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customers[] = [];
  customerName: string;
  shipTo: string;
  shipToContact: number;
  billTo: string;
  billToContact: number;
  siteType: string;
  constructor(public customersService: CustomersService, public customerDialog: MatDialog) { }

  displayedColumns = ['id', 'customerName', 'shipTo', 'shipToContact', 'billTo', 'billToContact',
  'siteType', 'addressCount', 'delete'];
// tslint:disable-next-line: no-use-before-declare
  dataSource = new CustomersDataSource(this.customersService);

  getCustomers() {
    this.customersService.customers$.subscribe(data => {
      // console.log(data, 'data');
      this.customers = data;
    });
  }// getCustomers()

  deleteCustomer(customer: Customers) {
    console.log(customer);
  }// deleteCustomer()

  openDialog(): void {
    const dialogRef = this.customerDialog.open(NewCustomerComponent, {
      width: '350px',
      height: '520px',
      data: {customerName: this.customerName, shipTo: this.shipTo, shipToContact: this.shipToContact,
        billTo: this.billTo, billToContact: this.billToContact, siteType: this.siteType},
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The customer has been added!');
      // this.client = result;
    });
  } // openDialog()

  ngOnInit() {
    this.getCustomers();
  }

}

export class CustomersDataSource extends DataSource<any> {
  constructor(public customersService: CustomersService) {
    super();
  }
  connect(): Observable<Customers[]> {
    return this.customersService.getCustomers();
  }
  disconnect() {}
}

