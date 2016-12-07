import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DonateService {
  private _donateUrl = '#';
  constructor(private_http: Http){

  }
}
