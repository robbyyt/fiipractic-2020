import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginRequestPayload } from '../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly endpoint = environment;

  constructor(
    private http: HttpClient
  ) { }

  public login(payload: ILoginRequestPayload): Observable<any> {
    return this.http.post(`${this.endpoint}/login`, payload);
  }
}
