import { Component, Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CrewMember } from '../../models/crew-member.model';
import { CrewTitle } from '../../models/crew-title.model';

@Component({
  selector: 'app-crew-edit',
  imports: [CommonModule,TranslateModule,FormsModule],
  templateUrl: './crew-edit.component.html'
})

export class CrewEditComponent {
  @Input() member: CrewMember | null = null;
  @Input() titles: CrewTitle[] = [];
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<CrewMember>();

  saveChanges() {
    if (this.member) this.save.emit(this.member);
  }

  closeModal() {
    this.cancel.emit();
  }
}