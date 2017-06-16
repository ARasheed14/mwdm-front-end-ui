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

  login(){
      this.storage.set(this.HAS_LOGGED_IN, true);
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
}
