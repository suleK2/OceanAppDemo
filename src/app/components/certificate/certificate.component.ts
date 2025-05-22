import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CertificateType } from '../../models/certificate-type.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Certificate } from '../../models/certificate.model';
import { CertificateTypeService } from '../../services/certificate-type.service';


@Component({
  selector: 'certificate-add',
   imports: [CommonModule,TranslateModule,FormsModule],
  templateUrl: './certificate.component.html'
})
export class CertificateComponent {
  types: CertificateType[] =[];
  @Input() certificate!: Certificate;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Certificate>();

  constructor(certificateTypeService:CertificateTypeService){
    this.types = certificateTypeService.getCertificateTypes();
  }
   saveChanges() {
    if (this.certificate) this.save.emit(this.certificate);
  }

  closeModal() {
    this.cancel.emit();
  }
}