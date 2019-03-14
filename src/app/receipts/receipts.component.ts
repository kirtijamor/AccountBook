import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';

export interface Transaction {
  invoiceNo: number;
  invoiceDate: string;
  client: string;
  amount: number;
  billTo: string;
  dueDate: string;
}

const transactions: Transaction[] = [
  {
    client: 'Client1', amount: 4000, invoiceNo: 1, dueDate: '21/02/2019' ,
    billTo: 'address1', invoiceDate: '21/02/2019'
  },
  {
    client: 'Client2', amount: 2500, invoiceNo: 2, dueDate: '18/02/2019' ,
    billTo: 'address2', invoiceDate: '21/02/2019'
  },
  {
    client: 'Client3', amount: 2000, invoiceNo: 3, dueDate: '16/02/2019' ,
    billTo: 'address3', invoiceDate: '21/02/2019'
  },
  {
    client: 'Client4', amount: 8000, invoiceNo: 4, dueDate: '15/02/2019' ,
    billTo: 'address4', invoiceDate: '21/02/2019'
  },
  {
    client: 'Client5', amount: 7500, invoiceNo: 5, dueDate: '15/02/2019' ,
    billTo: 'address5', invoiceDate: '21/02/2019'
  }
];

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})

export class ReceiptsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['invoiceNo', 'invoiceDate', 'client', 'amount', 'billTo', 'dueDate' , 'generate'];
  dataSource = new MatTableDataSource<Transaction>(transactions);

  ngOnInit() {
  }

  getInvoice(row) {
    console.log(row);
  }

}
