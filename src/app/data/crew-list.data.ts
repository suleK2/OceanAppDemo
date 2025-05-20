import { CrewMember } from "../models/crew-member.model";

export const Crews: CrewMember[] = [
  new CrewMember(1, 'John', 'Doe', 'USA', 1, 30, 500, 'USD'),
  new CrewMember(2, 'Jane', 'Smith', 'UK', 2, 45, 400, 'USD'),
  new CrewMember(3, 'Ali', 'Veli', 'Turkey', 3, 60, 200, 'EUR'),
  new CrewMember(4, 'Pierre', 'Dubois', 'France', 4, 120, 180, 'EUR'),
  new CrewMember(5, 'Carlos', 'Silva', 'Portugal', 2, 90, 350, 'USD')
];
