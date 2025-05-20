import { Injectable } from "@angular/core";
import { Certificate } from "../models/certificate.model";
import { Certificates } from "../data/certificate-list.data";

@Injectable({ 
    providedIn:'root'
})

export class CertificateService{
    constructor(){}
  
    getCertificatesByCrewId(crewId: number): Certificate[] {
    return Certificates.filter(cert => cert.crewId === crewId);
  }
}