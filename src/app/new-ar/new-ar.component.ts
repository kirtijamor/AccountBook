import { ArInvoices } from './../ar-invoices.model';
import { ArInvoicesService } from './../ar-invoices.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { CustomerDialogData } from '../ar-invoices/ar-invoices.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-ar',
  templateUrl: './new-ar.component.html',
  styleUrls: ['./new-ar.component.css']
})
export class NewArComponent implements OnInit {

  arInvoices: ArInvoices[] = [];
  arInvoice: ArInvoices;
  flag: number;

  constructor(public dialogRef: MatDialogRef<NewArComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: any,
              public arInvoicesService: ArInvoicesService,
              public datePipe: DatePipe) {
    // console.log(data, 'test');

    if (data !== null) {
      this.arInvoice = data;
      // this.arInvoice.invoiceDate = this.datePipe.transform(this.arInvoice.invoiceDate, 'full');
      // this.arInvoice.dueDate = this.datePipe.transform(this.arInvoice.dueDate, 'full');
      // console.log(this.arInvoice.invoiceDate, ' ', this.arInvoice.dueDate);
      this.flag = 1; // EDIT mode
    } else {
      this.arInvoice = new ArInvoices();
      this.flag = 0; // CREATE mode
    }
  }

  getArInvoices() {
    this.arInvoicesService.arInvoices$.subscribe(data => {
      this.arInvoices = data;

    });
  }
  saveAsDraft() {
    console.log('Saved as Draft!');
  }

  saveAndComplete() {
    console.log('Saved complete Transaction!');

    // this.arInvoice.invoiceDate = this.datePipe.transform(this.arInvoice.invoiceDate, 'dd-MMMM-yyyy');
    // this.arInvoice.dueDate = this.datePipe.transform(this.arInvoice.dueDate, 'dd-MMMM-yyyy');

    // console.log(this.arInvoice);

    if (this.flag === 1) {
      // this.arInvoice.dueDate.toString();
      // this.arInvoice.invoiceDate.toString();
      this.arInvoicesService.updateArInvoice(this.arInvoice);
    } else {
      this.arInvoicesService.addArInvoice(this.arInvoice);
    }
    this.dialogRef.close();
  }// saveAndComplete()

  ngOnInit() {
    this.getArInvoices();
    // console.log(this.data);
  }
}
