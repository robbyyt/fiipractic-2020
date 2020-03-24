import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISessionState } from './session/store/reducers/state/state.model';
import { sessionLoginLoadingSelector } from './session/store/selectors';
import { SessionService } from './session/services/session/session.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionLoginRequest } from './session/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fii-practic';
  constructor(
    private store: Store<ISessionState>,
    private service: SessionService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(SessionLoginRequest({
      payload: {
        email: '',
        password: ''
      }
    }));
    this.store.select(sessionLoginLoadingSelector)
      .subscribe(loading => {
        console.log(loading);
      });
  }
}
