import { Component } from '@angular/core';
import { CertificateTypeService } from '../../services/certificate-type.service';
import { CertificateType } from '../../models/certificate-type.model';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificateTypeEditComponent } from '../certificate-type-edit/certificate-type-edit.component';

@Component({
  selector: 'app-certificate-type',
  imports: [TranslateModule, CommonModule, FormsModule, CertificateTypeEditComponent],
  templateUrl: './certificate-type.component.html'
})
export class CertificateTypeComponent {
  constructor(private certificateTypeService: CertificateTypeService) { }
  getCertificateTypes(): CertificateType[] {
    return this.certificateTypeService.getCertificateTypes();
  }

  //edit 
  editing = false;
  selectedCertificateType!: CertificateType;

  openEdit(certificate: CertificateType) {
    this.selectedCertificateType = { ...certificate };
    this.editing = true;
  }

  saveEdit(updated: CertificateType) {
    if (updated.id == 0) {
      this.certificateTypeService.addNewType(updated);
    } else {
      this.certificateTypeService.updateType(updated);
    }

    this.editing = false;
  }
  //add new

  openAddModal() {
    this.selectedCertificateType = {
      id: 0,
      name: '',
      description: ''
    };
    this.editing = true;
  }


}