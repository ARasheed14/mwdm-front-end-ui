import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProgramsService {
  private _programsUrl = '#';
  constructor(private_http: Http){
  }
  getPrograms(){
    return [
      {
        title: "Program",
          date: "October 6, 2016",
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Program",
          imageUrl: "./assets/images/375x300.jpg",
      },
      {
        title: "Program",
          date: "October 6, 2016",
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Program",
          imageUrl: "./assets/images/375x300.jpg",
      },
    ];
  }
}
