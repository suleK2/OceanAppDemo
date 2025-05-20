import { Component } from "@angular/core";  
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CrewService } from "../../services/crew.service";
import { CrewMember } from "../../models/crew-member.model";
import { CrewTitle } from "../../models/crew-title.model";
import { CrewTitleService } from "../../services/crew-title.service";

@Component({
  selector: 'crewList',
  imports: [CommonModule,TranslateModule,FormsModule],
  templateUrl: 'crew-list.component.html'
})
export class CrewListComponent{
  title = 'Crew List';
  selectedMember: CrewMember | null = null;
  constructor(private crewService:CrewService,private crewTitleService:CrewTitleService){}
  ngOnInit(): void{
    this.getCrews();
    this.getTitles();
  }

  getCrews():CrewMember[]{
    return this.crewService.getCrews();
  }

  editMember(member: CrewMember): void {
  this.selectedMember = { ...member };
  }

  closeModal(): void {
    this.selectedMember = null;
  }
  
  saveMember(): void {
  if (this.selectedMember) {
    console.log('Saving member:', this.selectedMember);
    this.crewService.updateCrewMember(this.selectedMember);
    this.closeModal();
  }
  }

  getTitles():CrewTitle[]{
    return this.crewTitleService.getCrewTitles();
  }

  getTitleNameById(id: number): string {
    return this.crewTitleService.getTitleNameById(id);
  } 
}
