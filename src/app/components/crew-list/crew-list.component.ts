import { Component } from "@angular/core";  
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CrewService } from "../../services/crew.service";
import { CrewMember } from "../../models/crew-member.model";
import { CrewTitle } from "../../models/crew-title.model";
import { CrewTitleService } from "../../services/crew-title.service";
import { CertificateService } from "../../services/certificate.service";
import { Certificate } from "../../models/certificate.model";

import { CertificateListComponent } from "../certificate/certificate-list.component";
import { CrewEditComponent } from "../crew/crew-edit.component";

@Component({
  selector: 'crewList',
  imports: [CommonModule,TranslateModule,FormsModule,CertificateListComponent,CrewEditComponent],
  templateUrl: 'crew-list.component.html'
})
export class CrewListComponent{
  title = 'Crew List';
  constructor(private crewService:CrewService,
    private crewTitleService:CrewTitleService,
  private certificateService:CertificateService){}
  ngOnInit(): void{
    this.getCrews();
  }

  getCrews():CrewMember[]{
    return this.crewService.getCrews();
  }

  getTitleNameById(id: number): string {
    return this.crewTitleService.getTitleNameById(id);
  } 

//edit member

 getTitles():CrewTitle[]{
    return this.crewTitleService.getCrewTitles();
  }
  
selectedMember: CrewMember | null = null;
showEditModal = false;

openEditModal(member: CrewMember) {
  this.selectedMember = { ...member }; 
  this.showEditModal = true;
}

closeEditModal() {
  this.selectedMember = null;
  this.showEditModal = false;
}

saveMember(updated: CrewMember) {
  this.crewService.updateCrewMember(updated);
  this.closeEditModal();
}

//certificates
selectedCertificates: Certificate[] = [];
showCertificateModal = false;

openCertificateModal(member: CrewMember) {
  this.selectedCertificates = this.certificateService.getCertificatesByCrewId(member.id);
  this.showCertificateModal = true;
}

closeCertificateModal = () => {
  this.showCertificateModal = false;
};

//delete member
  deleteMember(member: CrewMember): void {
  const confirmed = confirm(`Are you sure you want to delete ${member.firstName} ${member.lastName}?`);
  if (confirmed) {
    this.crewService.deleteCrewMember(member.id);
    this.getCrews();
  }
}
}
