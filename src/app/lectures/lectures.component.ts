import { Component } from '@angular/core';
import { LecturesService } from './lectures.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/topromise';
// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'lectures.component.html',
  styleUrls:['/lectures.component.scss'],
})

export class LecturesComponent {
  episodes: any;
  constructor(http: Http, private lecturesService: LecturesService) {

  }
  ngOnInit(){
    this.getEpisodes();
  }
  getEpisodes(){
    this.lecturesService.getEpisodes().subscribe(response => {
      this.episodes = response.response.items;
      console.log(this.episodes);
      console.log(response);
      console.log(response.response.items);
    });
  }
}
