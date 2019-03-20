import { ApBills } from './ap-bills.model';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApBillsBackendService {
  url = 'http://localhost:3000';

  constructor(public httpClient: HttpClient) { }

  getApBills(): Observable<ApBills[]> {
    return this.httpClient.get<ApBills[]>(`${this.url}/apBills`).pipe(share());
  }

  deleteApBill(apBill: ApBills) {
    return this.httpClient.delete(`${this.url}/apBills/${apBill.id}`).pipe(share());
  }

  createApBill(apBill: ApBills) {
  return this.httpClient.post<ApBills>(`${this.url}/apBills/`, apBill).pipe(share());
  }
}
