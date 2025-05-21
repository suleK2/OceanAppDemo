export class Certificate {
  constructor(
    public id: number,
    public crewId: number,
    public certificateTypeId: number,
    public issueDate: string,
    public expiryDate: string
  ) {}
  public displayType?:string;
}