import { ApBillsBackendService } from './ap-bills-backend.service';
import { ApBills } from './ap-bills.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApBillsService {

  // tslint:disable-next-line:variable-name
  private _apBills: BehaviorSubject<ApBills[]> = new BehaviorSubject([]);
  public readonly apBills$: Observable<ApBills[]> = this._apBills.asObservable();

  constructor(public apBillsBackendService: ApBillsBackendService) {
    this.loadApBills();
  }

  loadApBills() {
    this.apBillsBackendService.getApBills().subscribe(res => {
      // console.log(res);
      this._apBills.next(res);
    });

  }// loadArInvoices()


  getApBills(): Observable<ApBills[]> {
    return this._apBills.asObservable();
  }

  deleteApBill(apBill: ApBills): Observable<ApBills[]> {
    const obs: Observable<any> = this.apBillsBackendService.deleteApBill(apBill);

    obs.subscribe(res => {
      const bills: ApBills[] = this._apBills.getValue();
      const index = bills.findIndex((deleted: ApBills) => deleted.id === apBill.id );

      bills.splice(index);
      this._apBills.next(bills);
    });

    return obs;
  }
}
