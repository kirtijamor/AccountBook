import { DatePipe } from '@angular/common';
import { ApBillsService } from './../ap-bills.service';
import { ApBills } from './../ap-bills.model';
import { VendorDialogData } from './../ap-bills/ap-bills.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-ap',
  templateUrl: './new-ap.component.html',
  styleUrls: ['./new-ap.component.css']
})
export class NewApComponent implements OnInit {
  id = 11;
  constructor(
    public apBillsService: ApBillsService,
    // tslint:disable-next-line:align
    public dialogRef: MatDialogRef<NewApComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: VendorDialogData,
    public datePipe: DatePipe
  ) {}

  apBill = new ApBills();

  saveAsDraft() {
    console.log('SAVED AS DRAFT!');
    this.dialogRef.close();
  }

  saveAndComplete() {
    console.log('SAVED SUCCESSFULLY!');

    this.apBill.id = this.id;
    this.id += 1;
    this.apBill.dueDate = this.datePipe.transform(this.apBill.dueDate, 'dd/mm/yyyy');
    this.apBill.billDate = this.datePipe.transform(this.apBill.billDate, 'dd/mm/yyyy');
    this.apBillsService.addApBill(this.apBill);

    this.dialogRef.close();
  }

  ngOnInit() {}
}
