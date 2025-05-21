import { Injectable } from "@angular/core";
import { CertificateType } from "../models/certificate-type.model";
import { Types } from "../data/certificate-type-list.data";

@Injectable({
  providedIn: 'root'
})

export class CertificateTypeService {

  getCertificateTypes(): CertificateType[] {
    return Types;
  }

  addNewType(newType: CertificateType): void {
    const maxId = Types.length > 0
      ? Math.max(...Types.map(c => c.id))
      : 0;

    newType.id = maxId + 1;
    Types.push(newType);
  }

  updateType(updatedType: CertificateType): void {
    const index = Types.findIndex(member => member.id === updatedType.id);
    if (index !== -1) {
      Types[index] = { ...updatedType };
    }
  }
}