import { Injectable } from "@angular/core";
import { Certificate } from "../models/certificate.model";
import { Certificates } from "../data/certificate-list.data";
import { CertificateTypeService } from "./certificate-type.service";
import { CertificateType } from "../models/certificate-type.model";

@Injectable({
  providedIn: 'root'
})

export class CertificateService {
  types: CertificateType[] = [];
  constructor(certificateTypeService: CertificateTypeService) {
    this.types = certificateTypeService.getCertificateTypes();
  }

  getCertificates() {
    return Certificates.map(cert => {
      const selectedType = this.types.find(t => t.id === cert.certificateTypeId);

      return {
        ...cert,
        displayType: selectedType ? selectedType.name : ''
      };
    });
  }
  addNewCertificate(newCertificate: Certificate): void {
      const maxId = Certificates.length > 0
        ? Math.max(...Certificates.map(c => c.id))
        : 0;
  
      newCertificate.id = maxId + 1;
      Certificates.push(newCertificate);
    }
}