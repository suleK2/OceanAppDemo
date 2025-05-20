import { Injectable } from "@angular/core";
import { CertificateType } from "../models/certificate-type.model";
import { Types } from "../data/certificate-type-list.data";

@Injectable({ 
    providedIn:'root'
})

export class CertificateTypeService{
    constructor(){}
    getCertificateTypes():CertificateType[]{
        return Types;
    }
    getDescriptionById(id: number): string {
        return Types.find(t => t.id === id)?.description || '';
    }
}