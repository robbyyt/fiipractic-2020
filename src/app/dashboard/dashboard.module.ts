import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/reducers';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    RouterModule,
  ]
})
export class DashboardModule { }
