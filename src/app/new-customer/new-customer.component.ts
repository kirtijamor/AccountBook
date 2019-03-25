import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewCustomerComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: Customers,
    // tslint:disable-next-line:align
    public customerService: CustomersService) { }

  customer = new Customers();

  save(customer: Customers) {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer);
    this.dialogRef.close();
  }// save()

  ngOnInit() {
  }

}
