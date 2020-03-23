import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from './pages';
import { StoreModule } from '@ngrx/store';
import { sessionReducer } from './store/reducers';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('session', sessionReducer)
  ]
})
export class SessionModule { }
