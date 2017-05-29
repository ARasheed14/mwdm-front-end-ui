import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Environment
import { EnvironmentService } from '../environments/environment.service';

@Injectable()
export class EventsService {

  http: any;
  apiUrl: String;

  constructor(private environmentService: EnvironmentService, http: Http) {
    this.http = http;
    this.apiUrl = this.environmentService.getAPIUrl() + '/events';
  }
  getEvents() {
    return this.http.get(this.apiUrl)
    .map(res => res.json());
  }
}
