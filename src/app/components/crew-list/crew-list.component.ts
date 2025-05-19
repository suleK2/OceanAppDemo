import { Component } from "@angular/core";  
import { CommonModule } from '@angular/common';
import {Crews} from "../../data/crew-list.data";

@Component({
  selector: 'crewList',
  imports: [CommonModule],
  templateUrl: 'crew-list.component.html'
})
export class crewListComponent {
  title = 'Crew List';
  crewList = Crews;
}
