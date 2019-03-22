import { Observable } from 'rxjs';
import { BanksService } from './../banks.service';
import { DataSource } from '@angular/cdk/collections';
import { Banks } from './../banks';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  // To store all the banks from the api
  public banks: Banks[] = [];
  constructor(public banksService: BanksService) { }

  displayedColumns = ['id', 'bankName', 'branch', 'delete'];
// tslint:disable-next-line: no-use-before-declare
  dataSource: any = new BanksDataSource(this.banksService);

  getBanks() {
    this.banksService.banks$.subscribe(data => {
      console.log(data);
      this.banks = data;
    });
  }// getBanks()

  deleteBank(bank: Banks) {
    // console.log(bank);
    this.banksService.deleteBank(bank).subscribe(data => {
      this.banks = data;
    });
  }

  ngOnInit() {
    this.getBanks();
  }

}

export class BanksDataSource extends DataSource<any> {
  constructor(public banksService: BanksService) {
    super();
  }
  connect(): Observable<Banks[]> {
    return this.banksService.getBanks();
  }
  disconnect() {}
}
