import { Injectable } from "@angular/core";
import { Currency } from "../models/currency.model";
import { Currencies } from "../data/currency-list.data";

@Injectable({
    providedIn: 'root'
})

export class CurrencyService {
    getCurrencies(): Currency[] {
        return Currencies;
    }
}