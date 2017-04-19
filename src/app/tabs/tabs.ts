import { Component } from '@angular/core';

import { EventsComponent } from '../events/events.component';
import { LecturesComponent } from '../lectures/lectures.component';
import { DonateComponent } from '../donate/donate.component';
import { ProgramsComponent } from '../programs/programs.component';

// import { HomePage } from './pages/home/home';
// import { AboutPage } from './pages/about/about';
// import { ContactPage } from './pages/contact/contact';

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
