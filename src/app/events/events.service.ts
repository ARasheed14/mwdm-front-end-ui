import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsService {

    private _eventsUrl = '#';

    constructor(private_http: Http) {



    }
    getEvents () {
      return [
        {

          title: "Event",
          date: "October 6, 2016",
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Event",

        },
         {

          title: "Event",
          date: "October 6, 2016",
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Event",

        },
         {

          title: "Event",
          date: "October 6, 2016",
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Event",

        },
         {

          title: "Event",
          date: "October 6, 2016",
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Event",

        },




      ];

    }
}
