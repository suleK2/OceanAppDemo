import { Injectable } from "@angular/core";
import { Crews } from "../data/crew-list.data";
import { CrewMember } from "../models/crew-member.model";

@Injectable({ 
    providedIn:'root'
})

export class CrewService{
    constructor(){}
    getCrews():CrewMember[]{
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
}