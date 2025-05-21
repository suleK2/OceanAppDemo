import { Component, Input } from '@angular/core';
import { CrewMember } from '../../models/crew-member.model';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crew-member',
  imports: [TranslateModule,CommonModule],
  templateUrl: './crew-member.component.html',
})

export class CrewMemberComponent {
    @Input() member!: CrewMember;
}
