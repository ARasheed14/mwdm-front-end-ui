import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Observable } from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'mwdwm-hasLoggedIn';

private apiUrl = 'https://bg36te82e5.execute-api.us-west-2.amazonaws.com/dev/masjids/SM866eca5b-a510-4eb7-8144-f51ea2b9d6c2/onboarding?EmailID=';

  constructor(
    public events: Events,
    public storage: Storage,
    private http: Http
  ) { }

  requestConfirmationCode(email:string): Observable<any>{
        // TODO: create real API call
        return this.http.get(this.apiUrl + email)
                        // ...and calling .json() on the response to return data
                         .map((res) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        // return Observable.of('09234');
    };


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
