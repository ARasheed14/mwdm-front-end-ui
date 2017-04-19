import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Observable } from "rxjs";

@Injectable()
export class UserService {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'mwdwm-hasLoggedIn';

  constructor(
    public events: Events,
    public storage: Storage
  ) { }

  login(email: string): Observable<any> {
    this.storage.set(this.HAS_LOGGED_IN, true);
    return this.setEmail(email);
  };

  setEmail(email: string): Observable<any> {
    return Observable.fromPromise(this.storage.set('email', email));
  };

  getEmail(): Promise<string> {
    return this.storage.get('email').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
}
