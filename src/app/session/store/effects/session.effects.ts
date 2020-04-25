import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { SessionService } from '../../services/session/session.service';
import {
  SessionLoginRequest,
  SessionLoginSuccess,
  SessionLoginFailure,
} from '../actions';
import { Injectable } from '@angular/core';

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

  constructor(
    private actions$: Actions,
    private sessionService: SessionService
  ) { }
}
