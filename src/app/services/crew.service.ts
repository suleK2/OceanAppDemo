import { Injectable } from "@angular/core";
import { Crews } from "../data/crew-list.data";
import { CrewMember } from "../models/crew-member.model";

@Injectable({
  providedIn: 'root'
})

export class CrewService {
  constructor() { }
  getCrews(): CrewMember[] {
    return Crews;
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