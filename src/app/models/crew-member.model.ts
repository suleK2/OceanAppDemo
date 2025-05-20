export class CrewMember {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public nationality: string,
    public title: string,
    public daysOnBoard: number,
    public dailyRate: number,
    public currency: string
  ) {}
}