import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly endpoint = '/auth';

  constructor(
    private http: HttpClient
  ) { }

  public login(payload: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.endpoint}/login`, payload);
  }
}
