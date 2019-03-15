import { ArInvoices } from './ar-invoices.model';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArInvoicesBackendService {
  url = 'http://localhost:3200';

  constructor(private httpClient: HttpClient) {}

  getArInvoices(): Observable<ArInvoices[]> {
    return this.httpClient.get<ArInvoices[]>(`${this.url}/arInvoices`).pipe(share());
  }

  // Takes a parameter of ArInvoice type & sends it to server
  // createArInvoice(arInvoice: ArInvoice) {
  //   return this.httpClient.post(`${this.url}/arInvoices`, arInvoice);
  // }
  // updateArInvoice(arInvoice: ArInvoice) {
  //   return this.httpClient.put(`${this.url}/arInvoices/${arInvoice.id}`, arInvoice);
  // }
  deleteArInvoice(arInvoice: ArInvoices) {
    return this.httpClient.delete(`${this.url}/arInvoices/${arInvoice.id}`).pipe(share());
  }


}
