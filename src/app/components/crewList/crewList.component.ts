import { Component } from "@angular/core";  
import { CommonModule } from '@angular/common';
import {Crews} from "../../data/crew.datasource";

@Component({
  selector: 'crewList',
  imports: [CommonModule],
  templateUrl: 'crewList.component.html'
})
export class crewListComponent {
  title = 'Crew List';
  crewList = Crews;
}
