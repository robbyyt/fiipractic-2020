import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISessionState } from './reducers/state/state.model';

const sessionSelector = createFeatureSelector('session');

// Login Selectors
const sessionLoginLoading = createSelector(
  sessionSelector,
  (state: ISessionState) => state.login.loading
);
const sessionLoginData = createSelector(
  sessionSelector,
  (state: ISessionState) => state.login.data
);
const sessionLoginError = createSelector(
  sessionSelector,
  (state: ISessionState) => state.login.error
);
