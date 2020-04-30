import { createReducer, Action } from '@ngrx/store';

import { dashboardInitialState } from './state/initial-state';
import { IDashboardState } from './state/state.model';

import { dashboardTrainingReducers } from './dashboard.reducers';

const dashboardReducers = createReducer(
  dashboardInitialState,
  ...dashboardTrainingReducers
);

export function dashboardReducer(state: IDashboardState, action: Action) {
  return dashboardReducers(state, action);
}
