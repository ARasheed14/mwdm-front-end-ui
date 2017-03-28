import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProgramsService {
  http: any;
  baseUrl: String;
  constructor(http: Http) {
    this.http = http;
    this.baseUrl = 'https://bg36te82e5.execute-api.us-west-2.amazonaws.com/dev/masjids/SM866eca5b-a510-4eb7-8144-f51ea2b9d6c2/programs'
  }
  getPrograms() {
    return this.http.get(this.baseUrl)
    .map(res => res.json());
  }
}
