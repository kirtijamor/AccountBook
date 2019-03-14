import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArInvoice } from './ar-invoices.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArInvoicesBackendService {
  url = 'http://localhost:3200';

  constructor(private httpClient: HttpClient) {}

  getArInvoice(): Observable<ArInvoice[]> {
    return this.httpClient.get<ArInvoice[]>(`${this.url}/arInvoices`);
  }

  // Takes a parameter of ArInvoice type & sends it to server
  // createArInvoice(arInvoice: ArInvoice) {
  //   return this.httpClient.post(`${this.url}/arInvoices`, arInvoice);
  // }
  // updateArInvoice(arInvoice: ArInvoice) {
  //   return this.httpClient.put(`${this.url}/arInvoices/${arInvoice.id}`, arInvoice);
  // }
  deleteArInvoice(id: number) {
    return this.httpClient.delete(`${this.url}/arInvoices/${id}`);
  }


}
