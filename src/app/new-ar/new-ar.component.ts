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

  id = 6;
  constructor(public dialogRef: MatDialogRef<NewArComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: CustomerDialogData, public arInvoicesService: ArInvoicesService) { }

  arInvoice = new ArInvoices();

  saveAsDraft() {
    console.log('Saved as Draft!');
  }

  saveAndComplete() {
    console.log('Saved complete Transaction!');

    this.arInvoice.id = this.id;
    this.id++;
    console.log(this.arInvoice);

    this.arInvoicesService.addArInvoice(this.arInvoice);
    this.dialogRef.close();
  }// saveAndComplete()

  ngOnInit() {}
}
