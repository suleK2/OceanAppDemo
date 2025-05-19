import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { crewListComponent } from "./components/crew-list/crew-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, crewListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OceanAppDemo';
}
