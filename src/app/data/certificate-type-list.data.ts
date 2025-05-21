import { CertificateType } from "../models/certificate-type.model";

export const Types: CertificateType[] = [
  new CertificateType(1, 'Basic Safety', 'Fundamental safety training for seafarers'),
  new CertificateType(2, 'Advanced Fire Fighting', 'Training in controlling and extinguishing shipboard fires'),
  new CertificateType(3, 'Medical First Aid', 'Instruction in first aid and emergency medical procedures onboard')
];