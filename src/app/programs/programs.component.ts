import { Component } from '@angular/core';
import { ProgramsService } from './programs.service';


@Component({
  templateUrl: 'programs.component.html'

})
export class ProgramsComponent {
  programs: any;
  constructor(private programsService: ProgramsService){
    this.programs = this.programsService.getPrograms();
  }
}
