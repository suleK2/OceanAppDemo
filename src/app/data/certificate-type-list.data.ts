import { CertificateType } from "../models/certificate-type.model";

export const Types: CertificateType[] = [
  new CertificateType(1, 'Basic Safety'),
  new CertificateType(2, 'Advanced Fire Fighting'),
  new CertificateType(3, 'Medical First Aid')
];