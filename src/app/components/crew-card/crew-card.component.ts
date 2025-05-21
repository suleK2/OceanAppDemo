import { Component, Input } from '@angular/core';
import { CrewMember } from '../../models/crew-member.model';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { CrewMemberComponent } from '../crew-member/crew-member.component';

@Component({
  selector: 'app-crew-card',
  imports: [TranslateModule,CommonModule,CrewMemberComponent],
  templateUrl: './crew-card.component.html',
})

export class CrewCardComponent {
  @Input() member: CrewMember | null = null;
  activeTab: 'member' | 'certificates' = 'member';
}
