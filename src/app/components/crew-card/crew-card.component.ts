import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CrewMember } from '../../models/crew-member.model';
import { TranslateModule } from '@ngx-translate/core';
import { CrewMemberComponent } from '../crew-member/crew-member.component';
import { CrewCertificatesComponent } from '../crew-certificates/crew-certificates.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crew-card',
  templateUrl: './crew-card.component.html',
  imports: [TranslateModule,CrewMemberComponent,CrewCertificatesComponent,CommonModule]
})
export class CrewCardComponent {
  @Input() member?: CrewMember;
  @Output() close = new EventEmitter<void>();

  activeTab: 'member' | 'certificates' = 'member';

  closeModal() {
    this.close.emit();
  }
}
