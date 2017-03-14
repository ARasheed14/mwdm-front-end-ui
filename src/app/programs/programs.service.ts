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
    this.baseUrl = 'https://zwgkahn9pl.execute-api.us-west-2.amazonaws.com/dev?MasjidID=SM866eca5b-a510-4eb7-8144-f51ea2b9d6c2'
  }
  getPrograms() {
    return this.http.get(this.baseUrl)
    .map(res => res.json());
  }
}
