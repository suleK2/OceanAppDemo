export interface CrewMember {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  currency: string;
  totalIncome: number;
}

export const Crews: CrewMember[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    nationality: 'USA',
    title: 'Captain',
    daysOnBoard: 30,
    dailyRate: 500,
    currency: 'USD',
    totalIncome: 30 * 500
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    nationality: 'UK',
    title: 'Engineer',
    daysOnBoard: 45,
    dailyRate: 400,
    currency: 'GBP',
    totalIncome: 45 * 400
  },
  {
    id: 3,
    firstName: 'Ali',
    lastName: 'Veli',
    nationality: 'Turkey',
    title: 'Cook',
    daysOnBoard: 60,
    dailyRate: 200,
    currency: 'TRY',
    totalIncome: 60 * 200
  }
];
