import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ILoginRequestPayload } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly endpoint = '/auth';

  test$ = new BehaviorSubject<{
    a: number;
    b: {
      c: number;
    }
  }>({
    a: 1,
    b: {
      c: 2
    }
  });

  constructor(
    private http: HttpClient
  ) { }

  public login(payload: ILoginRequestPayload): Observable<any> {
    return this.http.post(`${this.endpoint}/login`, payload);
  }
}
