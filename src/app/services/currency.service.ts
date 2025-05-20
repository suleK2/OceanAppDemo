import { Injectable } from "@angular/core";
import { Currency } from "../models/currency.model";
import { Currencies } from "../data/currency-list.data";

@Injectable({ 
    providedIn:'root'
})

export class CurrencyService{
    constructor(){}
    getCurrencies():Currency[]{
        return Currencies;
    }
    getCurrencyCodeById(id: number): string {
        return Currencies.find(t => t.id === id)?.code || '';
    }
}