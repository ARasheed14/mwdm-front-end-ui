import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LecturesService {

  http: any;
  apiUrl: string;
  constructor(http: Http) {
    this.http = http;
    this.apiUrl = 'https://api.spreaker.com/v2/users/masjidwdm/episodes?limit=7'
  }
  getEpisodes(){
    return this.http.get(this.apiUrl)
    .map(res => res.json());
  }

}
