import { Certificate } from "./certificate.model";

export class CrewMember {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public nationalityId: number,
    public titleId: number,
    public daysOnBoard: number,
    public dailyRate: number,
    public currencyId: number
  ) {}
  public displayNationality?: string;
  public displayTitle?: string;
  public displayCurrency?: string;
  public certificates?: Certificate[];
}