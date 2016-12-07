import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsService {

    private _eventsUrl = '#';

    constructor(private_http: Http) {



    }
    getEvents() {
      return [
        {
          eventId: "1",
          title: "The Muslim Ummah",
          date: {
            day:"FRIDAY",
            month:"OCT",
            number:"23",
          },
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageUrl: "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?h=350&auto=compress",

        },
         {
          eventId: "2",
          title: "Building Upon Islam's",
          date: {
            day:"SATURDAY",
            month:"NOV",
            number:"13",
          },
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageUrl: "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?h=350&auto=compress",

        },
         {
          eventId:"3",
          title: "Last Poet Standing",
          date: {
            day:"SATURDAY",
            month:"NOV",
            number:"13",
          },
          location:
          {
            name: "Masjid Warithudeen Mohammad",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageUrl: "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?h=350&auto=compress",

        },
         {
          eventId: "4",
          title: "Public Address",
          date: {
            day:"SATURDAY",
            month:"NOV",
            number:"13",
          },
          location:
          {
            name: "Masjid Maryam",
            address:"6641 Belfort St. Houston, Tx 77087",
          },
          time: "1:00",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageUrl: "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?h=350&auto=compress",

        },




      ];

    }
}
