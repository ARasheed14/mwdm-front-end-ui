import { Component } from '@angular/core';
import { EventsComponent } from '../events/events.component';
import { LecturesComponent } from '../lectures/lectures.component';
import { ProgramsComponent } from '../programs/programs.component';
import { DonateComponent } from '../donate/donate.component';
// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
   tab1Root: any = EventsComponent;
   tab2Root: any = LecturesComponent;
   tab3Root: any = DonateComponent;
   tab4Root: any = ProgramsComponent;


  constructor() {

  }
}
