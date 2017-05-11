import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sql } from '../core/sql.service';

import { LoadingController } from 'ionic-angular';
import * as moment from 'moment';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OnBoardingService {
    /**
     * @name generateConfirmationCode
     * @description Sends the email to the API to generate a confirmation code before saving the email
     * in the database and adding to mailchimp app users list.
     * @param {string} email
     */
    private apiUrl = 'https://bg36te82e5.execute-api.us-west-2.amazonaws.com/dev/masjids/SM866eca5b-a510-4eb7-8144-f51ea2b9d6c2/onboarding?EmailID=';

     constructor (private http: Http) {}

    generateConfirmationCode(email):Observable<any>{
        // TODO: create real API call
        return this.http.get(this.apiUrl + email)
                        // ...and calling .json() on the response to return data
                         .map((res) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        // return Observable.of('09234');
    }

}
