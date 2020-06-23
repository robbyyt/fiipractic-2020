import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SessionService } from '../../services/session/session.service';
import {
  SessionLoginRequest,
  SessionLoginSuccess,
  SessionLoginFailure,
  SessionRegisterRequest,
  SessionRegisterSuccess,
  SessionRegisterFailure,
} from '../actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SessionEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionLoginRequest),
      mergeMap((action) =>
        this.sessionService.login(action.payload).pipe(
          map((response) => SessionLoginSuccess({ payload: response })),
          catchError((error) => of(SessionLoginFailure({ error })))
        )
      )
    )
  );
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionRegisterRequest),
      mergeMap((action) => this.sessionService.register(action.payload).pipe(
        map((user) => SessionRegisterSuccess({token: user.token, email: action.payload.email})),
        catchError((error) => of(SessionRegisterFailure({error})))
        )
      )
    )
  );
  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionRegisterSuccess),
      tap((user) => {
        localStorage.setItem('token', user.token);
        this.router.navigateByUrl('/');
      })
    )
  );
  registerFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionRegisterFailure)
      // TODO: Handle register Failure
    )
  );

  constructor(
    private actions$: Actions,
    private sessionService: SessionService,
    private router: Router
  ) { }
}
