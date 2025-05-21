import { Component, Input } from '@angular/core';
import { Certificate } from '../../models/certificate.model';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CrewMember } from '../../models/crew-member.model';

@Component({
  selector: 'app-crew-certificates',
  imports: [TranslateModule,CommonModule],
  templateUrl: './crew-certificates.component.html',
})

export class CrewCertificatesComponent {
   private _member!: CrewMember;
   certificates: Certificate[] = [];
  @Input() 
  set member(value: CrewMember) {
    this._member = value;
    this.certificates = value.certificates ?? [];
    console.log('Certificates:', this.certificates);
  }

  get member(): CrewMember {
    return this._member;
  }
}
