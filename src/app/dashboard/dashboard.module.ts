import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/effects/index';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [DashboardComponent, UsersComponent],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    EffectsModule.forFeature([DashboardEffects]),
    StoreModule.forFeature('dashboard', dashboardReducer),
    RouterModule,
  ]
})
export class DashboardModule { }
