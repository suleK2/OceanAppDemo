import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CrewMember } from "../../models/crew-member.model";

import { CertificateListComponent } from "../certificate-list/certificate-list.component";
import { CrewEditComponent } from "../crew-edit/crew-edit.component";
import { CrewCardComponent } from "../crew-card/crew-card.component";
import { CertificateComponent } from "../certificate/certificate.component";

import { CrewService } from "../../services/crew.service";
import { Certificate } from "../../models/certificate.model";
import { CertificateService } from "../../services/certificate.service";

@Component({
  selector: 'crewList',
  imports: [CommonModule, TranslateModule, FormsModule, CertificateListComponent,
    CrewEditComponent, CrewCardComponent, CertificateComponent],
  templateUrl: 'crew-list.component.html'
})

export class CrewListComponent {

  constructor(private crewService: CrewService, private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.getCrews();
  }

  // get all lists
  getCrews(): CrewMember[] {
    return this.crewService.getCrews();
  }

  //edit member

  selectedMember!: CrewMember;
  showEditModal = false;

  openEditModal(member: CrewMember) {
    this.selectedMember = { ...member };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  saveMember(updated: CrewMember) {
    //check if it is a new record
    if (updated.id == 0) {
      this.crewService.addNewCrewMember(updated);
    }
    this.crewService.updateCrewMember(updated);
    this.closeEditModal();
  }

  //certificates
  showCertificateModal = false;

  openCertificateModal(member: CrewMember) {
    this.selectedMember = member;
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

  //add new

  openAddModal() {
    this.selectedMember = {
      id: 0,
      firstName: '',
      lastName: '',
      titleId: 0,
      nationalityId: 0,
      currencyId: 0,
      daysOnBoard: 0,
      dailyRate: 0,
    };
    this.showEditModal = true;
  }
  showCrewCardModal = false;
  showCrewCard(member: CrewMember) {
    this.selectedMember = member;
    this.showCrewCardModal = true;
  }

  closeCrewCard() {
    this.showCrewCardModal = false;
  }

  // add new certificate 
  selectedCertificate !: Certificate;
  showAddCertificateModal = false;

  openAddCertificateModal(member: CrewMember) {
    this.selectedCertificate = {
      id: 0,
      crewId: member.id,
      certificateTypeId: 0,
      issueDate: '',
      expiryDate: ''
    };
    this.selectedMember = member;
    this.showAddCertificateModal = true;
  }
 
  closeAddCertificateModal() {
    this.showAddCertificateModal = false;
  }
  saveCertificate(updated: Certificate) {
    this.certificateService.addNewCertificate(updated);
    this.showAddCertificateModal = false;
  
  }


}
