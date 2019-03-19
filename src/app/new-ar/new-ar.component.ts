import { ArInvoices } from './../ar-invoices.model';
import { ArInvoicesService } from './../ar-invoices.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { CustomerDialogData } from '../ar-invoices/ar-invoices.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-ar',
  templateUrl: './new-ar.component.html',
  styleUrls: ['./new-ar.component.css']
})
export class NewArComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewArComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: CustomerDialogData, public arInvoicesService: ArInvoicesService) { }

  arInvoice = new ArInvoices();
  arInvoices: ArInvoices[] = [];

  saveAsDraft() {
    console.log('Draft!');
  }

  saveAndComplete() {
    console.log('Saved!');
    this.arInvoice.id = 11;
    console.log(this.arInvoice);
    this.arInvoicesService.addArInvoice(this.arInvoice);
    // this.getArInvoices();
  }

  // getArInvoices() {
  //   this.arInvoicesService.arInvoices$.subscribe((data: ArInvoices[]) => {
  //     this.arInvoices = data;
  //     console.log(data, 'data in new ar');
  //   });

  // }// getArInvoices()


  ngOnInit() {
    // this.getArInvoices();
  }
}
