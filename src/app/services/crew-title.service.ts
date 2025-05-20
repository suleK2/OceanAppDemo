import { Injectable } from "@angular/core";
import { CrewTitle } from "../models/crew-title.model";
import { Titles } from "../data/crew-title.data";

@Injectable({ 
    providedIn:'root'
})

export class CrewTitleService{
    constructor(){}
    getCrewTitles():CrewTitle[]{
        return Titles;
    }
    getTitleNameById(id: number): string {
        return Titles.find(t => t.id === id)?.name || '';
    }
}