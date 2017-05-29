import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Environment
import { EnvironmentService } from '../environments/environment.service';

@Injectable()
export class ProgramsService {
  http: any;
  apiUrl: string;

  constructor(private environmentService: EnvironmentService,http: Http) {
    this.http = http;
    this.apiUrl = this.environmentService.getAPIUrl() + '/programs';
  }

  getPrograms() {
    return this.http.get(this.apiUrl)
    .map(res => res.json());
  }
}
