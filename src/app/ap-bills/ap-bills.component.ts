import { ApBillsService } from './../ap-bills.service';
import { ApBills } from './../ap-bills.model';
import { NewApComponent } from './../new-ap/new-ap.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

export interface VendorDialogData {
  vendor: string;
  amount: number;
  dueDate: string;
}

@Component({
  selector: 'app-ap-bills',
  templateUrl: './ap-bills.component.html',
  styleUrls: ['./ap-bills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApBillsComponent implements OnInit {

  apBills: ApBills[];
  vendor: string;
  amount: number;
  dueDate: string;

  constructor(public vendorDialog: MatDialog, public apBillsService: ApBillsService) { }

  displayedColumns: string[] = ['billNo', 'billDate', 'vendor', 'amount', 'dueDate', 'delete'];
  @ViewChild(MatSort) sort: MatSort;
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new ApBillsDataSource(this.apBillsService);

  openDialog(): void {
    const dialogRef = this.vendorDialog.open(NewApComponent, {
      width: '400px',
      height: '420px',
      data: { client: this.vendor, amount: this.amount, dueDate: this.dueDate },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The transaction has been recorded!');
      this.vendor = result;
      // console.log(`${result}`);
    });
  }// to close openDialog()

  getApBills() {
    this.apBillsService.apBills$.subscribe((data: ApBills[]) => {
      this.apBills = data;
      console.log(data);
    });
  }// getApBills()

  deleteApBill(apBill: ApBills) {
    this.apBillsService.deleteApBill(apBill).subscribe(data => {
      this.apBills = data;
    });
  }// deleteApBill()

  ngOnInit() {
    this.getApBills();
  }
}

export class ApBillsDataSource extends DataSource<any> {
  constructor(public apBillsService: ApBillsService) {
    super();
  }
  connect(): Observable<ApBills[]> {
    return this.apBillsService.getApBills();
  }
  disconnect() { }
}
