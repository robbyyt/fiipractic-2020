import { on } from '@ngrx/store';
import { SessionLoginRequest } from '../actions';
import { ISessionState } from './state/state.model';

export const sessionLoginReducers = [
  on(SessionLoginRequest, (state: ISessionState) => ({
    ...state,
    login: {
      ...state.login,
      loading: true
    }
  })),
  on(SessionLoginRequest, (state: ISessionState, data: any) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      data
    }
  })),
  on(SessionLoginRequest, (state: ISessionState, error: any) => ({
    ...state,
    login: {
      ...state.login,
      loading: false,
      error
    }
  })),
];
