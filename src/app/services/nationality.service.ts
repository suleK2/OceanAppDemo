import { Injectable } from "@angular/core";
import { Nationality } from "../models/nationality.model";
import { Nationalities } from "../data/nationality-list.data";

@Injectable({
    providedIn: 'root'
})

export class NationalityService {
    getNationalities(): Nationality[] {
        return Nationalities;
    }
}