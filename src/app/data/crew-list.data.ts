import { CrewMember } from "../models/crew-member.model";

export const Crews: CrewMember[] = [
  new CrewMember(1, 'John', 'Doe', 'USA', 'Captain', 30, 500, 'USD'),
  new CrewMember(2, 'Jane', 'Smith', 'UK', 'Engineer', 45, 400, 'GBP'),
  new CrewMember(3, 'Ali', 'Veli', 'Turkey', 'Cook', 60, 200, 'TRY'),
  new CrewMember(4, 'Pierre', 'Dubois', 'France', 'Mechanic', 120, 180, 'EUR'),
  new CrewMember(5, 'Carlos', 'Silva', 'Portugal', 'Engineer', 90, 350, 'USD')
];
