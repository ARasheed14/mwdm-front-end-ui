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

}
