import { Component, Input } from '@angular/core';
import { Certificate } from '../../models/certificate.model';
import { CertificateTypeService } from '../../services/certificate-type.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certificate-list',
  imports: [CommonModule,TranslateModule],
  templateUrl: './certificate-list.component.html'
})
export class CertificateListComponent {
  @Input() certificates: Certificate[] = [];
  @Input() close: () => void = () => {};

  constructor(private certificateTypeService: CertificateTypeService) {}

  getTypeName(id: number): string {
    return this.certificateTypeService.getDescriptionById(id); // or return translated key
  }
}
