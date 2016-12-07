import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LecturesService {

  private _lecturesUrl = '#';

  constructor(private_http: Http){

  }
  getLectures () {
    return [
      {
        title: "Lecture Name",
        date: "Nov 7, 2017",
        location:
        {
          name:"Masjid WDM",
          address:"6641 Belfort St. Houston, Tx 77087",
        },
        time: "12:00",
        description: "Who gave this lecture ",
        imageUrl: "",
      },
      {
        title: "Lecture Name",
        date: "Nov 7, 2017",
        location:
        {
          name:"Masjid WDM",
          address:"6641 Belfort St. Houston, Tx 77087",
        },
        time: "12:00",
        description: "Who gave this lecture ",
        imageUrl: "",
      },
    ];
  }
}
