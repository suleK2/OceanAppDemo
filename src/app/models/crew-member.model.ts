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
}