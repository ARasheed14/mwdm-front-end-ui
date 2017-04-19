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
    generateConfirmationCode(email):Observable<any>{
        // TODO: create real API call
        return Observable.of('09234');
    }

}