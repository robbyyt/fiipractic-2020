import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from './pages';
import { StoreModule } from '@ngrx/store';
import { sessionReducer } from './store/reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { SessionEffects } from './store/effects/session.effects';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([SessionEffects]),
    StoreModule.forFeature('session', sessionReducer)
  ],
  providers: [
    SessionEffects
  ]
})
export class SessionModule { }
