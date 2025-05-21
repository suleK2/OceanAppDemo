import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CrewMember } from "../../models/crew-member.model";

import { CertificateListComponent } from "../certificate-list/certificate-list.component";
import { CrewEditComponent } from "../crew-edit/crew-edit.component";
import { CrewCardComponent } from "../crew-card/crew-card.component";

import { CrewService } from "../../services/crew.service";

@Component({
  selector: 'crewList',
  imports: [CommonModule, TranslateModule, FormsModule, CertificateListComponent, CrewEditComponent, CrewCardComponent],
  templateUrl: 'crew-list.component.html'
})

export class CrewListComponent {

  constructor(private crewService: CrewService) { }

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

}
