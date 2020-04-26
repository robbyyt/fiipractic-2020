import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ILoginRequestPayload, ILoginResponse, IRegisterPayload } from '../../models';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly endpoint = environment.api;

  constructor(private http: HttpClient) { }

  public login(payload: ILoginRequestPayload): Observable<ILoginResponse> {
    return this.http
      .post<ILoginResponse>(`${this.endpoint}/login`, payload)
      .pipe(
        map((user) => {
          if (user.success) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', user.token);
            return user;
          } else {
            throwError(user);
          }
        })
      );
  }

  public register(payload: IRegisterPayload): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/register`, payload);
  }
}
