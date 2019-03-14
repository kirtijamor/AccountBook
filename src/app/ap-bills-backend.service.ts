import { Observable } from 'rxjs';
import { ArInvoice} from './ar-invoices.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApBillsBackendService {

  url = 'http://localhost:3200';

  constructor(public httpClient: HttpClient) { }

  getArInvoices() {
    return this.httpClient.get(`${this.url}/arInvoices`);
  }
}
