import { VendorDialogData } from './../ap-bills/ap-bills.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-ap',
  templateUrl: './new-ap.component.html',
  styleUrls: ['./new-ap.component.css']
})
export class NewApComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewApComponent>, @Inject(MAT_DIALOG_DATA) public data: VendorDialogData) { }

  ngOnInit() {
  }
  saveAsDraft() {
    console.log('SAVED AS DRAFT!');
    this.dialogRef.close();
  }

  saveAndComplete() {
    console.log('SAVED SUCCESSFULLY!');
    this.dialogRef.close();
  }
}
