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
}