import { BehaviorSubject, Observable } from 'rxjs';
import { BanksBackendService } from './banks-backend.service';
import { Banks } from './banks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

// tslint:disable-next-line: variable-name
  private _banks: BehaviorSubject<Banks[]> = new BehaviorSubject([]);
  public readonly banks$: Observable<Banks[]> = this._banks.asObservable();

  constructor(public banksBackendService: BanksBackendService) {
    this.loadBanks();
  }

  loadBanks() {
    this.banksBackendService.getBanks().subscribe(res => {
      console.log(res);
      this._banks.next(res);
    });
  }// loadBanks()

  getBanks(): Observable<Banks[]> {
    return this._banks.asObservable();
  }// getBanks()

  deleteBank(bank: Banks): Observable<Banks[]> {
    const obs: Observable<any> = this.banksBackendService.deleteBank(bank);

    obs.subscribe(res => {
      this.loadBanks();
      this._banks.next(this._banks.getValue());
    });

    return obs;
  }// deleteBanks()
}
