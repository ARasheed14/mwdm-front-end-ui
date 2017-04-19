import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LecturesService {

  http: any;
  baseUrl: String;
  constructor(http: Http) {
    this.http = http;
    this.baseUrl = 'https://api.spreaker.com/v2/users/masjidwdm/episodes?limit=7'
  }
  getEpisodes(){
    return this.http.get(this.baseUrl)
    .map(res => res.json());
  }

}
