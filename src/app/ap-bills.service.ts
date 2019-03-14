import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApBills } from './ap-bills.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApBillsService {

  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getApBills(): Observable<ApBills[]> {
    return this.httpClient.get<ApBills[]>(`${this.url}/apBills`);
  }

  deleteApBill(id: number) {
    return this.httpClient.delete(`${this.url}/apBills/${id}`);
  }
}
