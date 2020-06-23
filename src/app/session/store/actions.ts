import { createAction, props } from '@ngrx/store';

export const SessionLoginRequest = createAction(
  '[Session] Login Request',
  props<{ payload: { email: string; password: string } }>()
);
export const SessionLoginSuccess = createAction(
  '[Session] Login Success',
  props<{ payload: { [key: string]: any } }>() // TODO change with right interface
);
export const SessionLoginFailure = createAction(
  '[Session] Login Failure',
  props<{ [key: string]: any }>() // TODO change with right interface
);
export const SessionRegisterRequest = createAction(
  '[Session] Register Request',
  props<{ payload: {  email: string; firstname: string; lastname: string; password: string } }>()
);
export const SessionRegisterSuccess = createAction(
  '[Session] Register Success',
  props<{ [key: string]: any }>() // TODO change with right interface
);
export const SessionRegisterFailure = createAction(
  '[Session] Register Success',
  props<{ [key: string]: any }>() // TODO change with right interface
);
