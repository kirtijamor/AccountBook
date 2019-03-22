import { BankDialogData } from './../banks/banks.component';
import { BanksService } from './../banks.service';
import { Banks } from './../banks';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-bank',
  templateUrl: './new-bank.component.html',
  styleUrls: ['./new-bank.component.css']
})
export class NewBankComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewBankComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: BankDialogData,
    // tslint:disable-next-line:align
    public bankService: BanksService) { }

  bank = new Banks();

  save(bank: Banks) {
    // console.log(this.bank);
    this.bankService.addBank(this.bank);
    this.dialogRef.close();
  }// saveBank()

  ngOnInit() {
  }

}
