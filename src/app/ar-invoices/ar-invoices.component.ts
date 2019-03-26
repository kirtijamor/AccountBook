import { ArInvoices } from './../ar-invoices.model';
import { ArInvoicesService } from './../ar-invoices.service';

import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort,
  MatPaginator
} from '@angular/material';
import { NewArComponent } from '../new-ar/new-ar.component';
import { ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

export interface CustomerDialogData {
  client: string;
  amount: number;
  dueDate: number;
}

@Component({
  selector: 'app-ar-invoices',
  templateUrl: './ar-invoices.component.html',
  styleUrls: ['./ar-invoices.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArInvoicesComponent implements OnInit {
  arInvoices: ArInvoices[];

  constructor(
    public customerDialog: MatDialog,
    private arInvoicesService: ArInvoicesService
  ) {}

  displayedColumns = [
    'invoiceNo',
    'invoiceDate',
    'client',
    'amount',
    'billTo',
    'dueDate',
    'delete',
    'update'
  ];
  // tslint:disable-next-line: no-use-before-declare
  dataSource: any = new ArInvoicesDataSource(this.arInvoicesService);

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  getInvoice(row) {
    console.log(row);
  }

  openDialog(): void {
    const dialogRef = this.customerDialog.open(NewArComponent, {
      width: '350px',
      height: '475px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The transaction has been recorded!');
    });
  } // openDialog()

  openUpdateDialog(invoice: ArInvoices): void {
    console.log(invoice);

    const dialogRef = this.customerDialog.open(NewArComponent, {
      width: '350px',
      height: '475px',
      data:
        {
          invoiceNo: invoice.invoiceNo,
          invoiceDate: invoice.invoiceDate,
          amount: invoice.amount,
          client: invoice.client,
          dueDate: invoice.dueDate,
          billTo: invoice.billTo
        }
        ,
      panelClass: 'custom-dialog-container'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The transaction has been recorded!');
    //   console.log(result, 'RESULT');
    // });
    // this.getArInvoices();
  } // openUpdateDialog()

  getArInvoices() {
    this.arInvoicesService.arInvoices$.subscribe((data: ArInvoices[]) => {
      this.arInvoices = data;
      console.log(data, 'data');
    });
  } // getArInvoices()

  deleteArInvoice(arInvoice: ArInvoices) {
    this.arInvoicesService.deleteArInovice(arInvoice).subscribe(data => {
      this.arInvoices = data;
    });
  } // deleteApBill()

  ngOnInit() {
    this.getArInvoices();
  }

  // invoiceNoFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  // invoiceDateFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  // clientFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  // amountFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}

export class ArInvoicesDataSource extends DataSource<any> {
  constructor(private arInvoicesService: ArInvoicesService) {
    super(); // call the parent constructor or to call func on a parent object
  }
  connect(): Observable<ArInvoices[]> {
    return this.arInvoicesService.getArInvoices();
  }
  disconnect() {}
}
