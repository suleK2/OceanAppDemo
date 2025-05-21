import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CrewMember } from '../../models/crew-member.model';
import { CrewTitle } from '../../models/crew-title.model';
import { Nationality } from '../../models/nationality.model';
import { Currency } from '../../models/currency.model';

import { CrewTitleService } from '../../services/crew-title.service';
import { NationalityService } from '../../services/nationality.service';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-crew-edit',
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './crew-edit.component.html'
})

export class CrewEditComponent {
  titles: CrewTitle[] = [];
  nationalities: Nationality[] = [];
  currencies: Currency[] = [];

  @Input() member!: CrewMember;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<CrewMember>();

  constructor(
    private crewTitleService: CrewTitleService,
    private nationalityService: NationalityService,
    private currencyService: CurrencyService) {
    this.titles = crewTitleService.getCrewTitles();
    this.nationalities = nationalityService.getNationalities();
    this.currencies = currencyService.getCurrencies();
  }

  saveChanges() {
    if (this.member) this.save.emit(this.member);
  }

  closeModal() {
    this.cancel.emit();
  }
}