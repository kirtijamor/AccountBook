import { share } from 'rxjs/operators';
import { Banks } from './banks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanksBackendService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3300/banks';

  getBanks(): Observable<Banks[]> {
    return this.httpClient.get<Banks[]>(this.url).pipe(share());
  }

  deleteBank(bank: Banks) {
    return this.httpClient.delete<Banks>(`${this.url}/${bank.id}`).pipe(share());
  }
}
