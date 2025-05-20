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

@Component({
  selector: 'crewList',
  imports: [CommonModule,TranslateModule,FormsModule,CertificateListComponent],
  templateUrl: 'crew-list.component.html'
})
export class CrewListComponent{
  title = 'Crew List';
  selectedMember: CrewMember | null = null;
  constructor(private crewService:CrewService,
    private crewTitleService:CrewTitleService,
  private certificateService:CertificateService){}
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

  deleteMember(member: CrewMember): void {
  const confirmed = confirm(`Are you sure you want to delete ${member.firstName} ${member.lastName}?`);
  if (confirmed) {
    this.crewService.deleteCrewMember(member.id);
    this.getCrews();
  }
}

  getTitles():CrewTitle[]{
    return this.crewTitleService.getCrewTitles();
  }

  getTitleNameById(id: number): string {
    return this.crewTitleService.getTitleNameById(id);
  } 

  selectedCertificates: Certificate[] = [];
showCertificateModal = false;

openCertificateModal(member: CrewMember) {
  this.selectedCertificates = this.certificateService.getCertificatesByCrewId(member.id);
  this.showCertificateModal = true;
}

closeCertificateModal = () => {
  this.showCertificateModal = false;
};
}
