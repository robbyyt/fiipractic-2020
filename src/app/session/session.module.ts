import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from './pages';
import { StoreModule } from '@ngrx/store';
import { sessionReducer } from './store/reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { SessionEffects } from './store/effects/session.effects';
import { MaterialModule } from '../material.module';
import { AuthCardComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import {
  RecaptchaModule,
  RECAPTCHA_LANGUAGE,
  RecaptchaFormsModule,
} from 'ng-recaptcha';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([SessionEffects]),
    StoreModule.forFeature('session', sessionReducer),
    MaterialModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    SessionEffects,
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'ro',
    },
  ],
  exports: [LoginComponent, RegisterComponent],
})
export class SessionModule {}
