import { Component } from "@angular/core";  
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CrewService } from "../../services/crew.service";
import { CrewMember } from "../../models/crew-member.model";

@Component({
  selector: 'crewList',
  imports: [CommonModule,TranslateModule],
  templateUrl: 'crew-list.component.html'
})
export class CrewListComponent {
  title = 'Crew List';
  constructor(private crewService:CrewService){}
  ngOnInit(): void{
    this.getCrews();
  }

  getCrews():CrewMember[]{
    return this.crewService.getCrews();
  }
}
