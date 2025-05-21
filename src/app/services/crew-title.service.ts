import { Injectable } from "@angular/core";
import { CrewTitle } from "../models/crew-title.model";
import { Titles } from "../data/crew-title.data";

@Injectable({
    providedIn: 'root'
})

export class CrewTitleService {
    getCrewTitles(): CrewTitle[] {
        return Titles;
    }
}