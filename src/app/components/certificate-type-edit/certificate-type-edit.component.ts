import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CertificateType } from '../../models/certificate-type.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'certificate-type-edit',
   imports: [CommonModule,TranslateModule,FormsModule],
  templateUrl: './certificate-type-edit.component.html'
})
export class CertificateTypeEditComponent {
  @Input() certificateType: CertificateType = new CertificateType(0, '', '');
  @Output() save = new EventEmitter<CertificateType>();
  @Output() close = new EventEmitter<void>();

  onSave() {
    this.save.emit(this.certificateType);
  }

  onClose() {
    this.close.emit();
  }
}
