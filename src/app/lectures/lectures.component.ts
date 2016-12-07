
import { Component } from '@angular/core';
import { LecturesService } from './lectures.service';
// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'lectures.component.html'
})
export class LecturesComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;
  lectures: any;
  constructor(private lecturesService: LecturesService) {
    this.lectures = this.lecturesService.getLectures();
  }
}
