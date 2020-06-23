import { on } from '@ngrx/store';
import { ISessionState } from './state/state.model';
import { SessionRegisterRequest, SessionRegisterFailure, SessionRegisterSuccess } from '../actions';


export const sessionRegisterReducers = [
  on(SessionRegisterRequest, (state: ISessionState) => ({
    ...state,
    register: {
      ...state.register,
      loading: true,
    }
  })),
  on(SessionRegisterSuccess, (state: ISessionState, data: any) => ({
    ...state,
    register: {
      loading: false,
      error: null,
      data
    }
  })),
  on(SessionRegisterFailure, (state: ISessionState, error: any) => ({
    ...state,
    register: {
      ...state.register,
      loading: false,
      error
    }
  }))
];
