import { ArInvoices } from './ar-invoices.model';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArInvoicesBackendService {
  url = 'http://localhost:3200/arInvoices';

  constructor(private httpClient: HttpClient) {}

  getArInvoices(): Observable<ArInvoices[]> {
    return this.httpClient.get<ArInvoices[]>(this.url).pipe(share());
  }

  // Takes a parameter of ArInvoice type & sends it to server
  createArInvoice(arInvoice: ArInvoices) {
    return this.httpClient.post<ArInvoices>(`${this.url}/`, arInvoice).pipe(share());
  }

  updateArInvoice(arInvoice: ArInvoices) {
    return this.httpClient.put(`${this.url}/${arInvoice.id}`, arInvoice);
  }

  deleteArInvoice(arInvoice: ArInvoices) {
    return this.httpClient.delete(`${this.url}/${arInvoice.id}`).pipe(share());
  }


}
