import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sql } from '../core/sql.service';

import { LoadingController } from 'ionic-angular';
import * as moment from 'moment';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Environment
import { EnvironmentService } from '../environments/environment.service';

@Injectable()
export class OnBoardingService {

    private apiUrl: string;

    constructor(private environmentService: EnvironmentService, private http: Http) {
        this.apiUrl = this.environmentService.getAPIUrl() + '/onboarding?EmailID=';
    }

    /**
    * @name generateConfirmationCode
    * @description Sends the email to the API to generate a confirmation code before saving the email
    * in the database and adding to mailchimp app users list.
    * @param {string} email
    */
    generateConfirmationCode(email): Observable<any> {
        // TODO: create real API call
        return this.http.get(this.apiUrl + email)
            // ...and calling .json() on the response to return data
            .map((res) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
