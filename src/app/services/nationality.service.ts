import { Injectable } from "@angular/core";
import { Nationality } from "../models/nationality.model";
import { Nationalities } from "../data/nationality-list.data";

@Injectable({ 
    providedIn:'root'
})

export class NationalityService{
    constructor(){}
    getNationalities():Nationality[]{
        return Nationalities;
    }
    getNameById(id: number): string {
        return Nationalities.find(t => t.id === id)?.name || '';
    }
}