import { Injectable } from "@angular/core";
import { Crews } from "../data/crew-list.data";

import { CrewMember } from "../models/crew-member.model";
import { CrewTitle } from "../models/crew-title.model";
import { Nationality } from "../models/nationality.model";
import { Currency } from "../models/currency.model";
import { Certificate } from "../models/certificate.model";

import { CrewTitleService } from "./crew-title.service";
import { NationalityService } from "./nationality.service";
import { CurrencyService } from "./currency.service";
import { CertificateService } from "./certificate.service";

@Injectable({
  providedIn: 'root'
})

export class CrewService {
  titles: CrewTitle[] = [];
  nationalities: Nationality[] = [];
  currencies: Currency[] = [];
  certificates: Certificate[] = [];

  constructor(crewTitleService: CrewTitleService,
    nationalityService: NationalityService,
    currencyService: CurrencyService,
    certificateService: CertificateService
  ) {
    this.titles = crewTitleService.getCrewTitles();
    this.nationalities = nationalityService.getNationalities();
    this.currencies = currencyService.getCurrencies();
    this.certificates = certificateService.getCertificates();
  }

  getCrews(): CrewMember[] {
    return Crews.map(member => {
      const title = this.titles.find(t => t.id === member.titleId);
      const nat = this.nationalities.find(n => n.id === member.nationalityId);
      const cur = this.currencies.find(c => c.id === member.currencyId);
      const cert = this.certificates.filter(ce => ce.crewId === member.id);

      return {
        ...member,
        displayTitle: title ? title.name : '',
        displayNationality: nat ? nat.name : '',
        displayCurrency: cur ? cur.code : '',
        certificates: cert
      };
    });
  }
  updateCrewMember(updatedMember: CrewMember): void {
    const index = Crews.findIndex(member => member.id === updatedMember.id);
    if (index !== -1) {
      Crews[index] = { ...updatedMember };
    }
  }
  deleteCrewMember(id: number): void {
    const index = Crews.findIndex(c => c.id === id);
    if (index !== -1) {
      Crews.splice(index, 1);
    }
  }
  addNewCrewMember(newMember: CrewMember): void {
    const maxId = Crews.length > 0
      ? Math.max(...Crews.map(c => c.id))
      : 0;

    newMember.id = maxId + 1;
    Crews.push(newMember);
  }
}