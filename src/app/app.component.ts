import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { CrewListComponent } from "./components/crew-list/crew-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrewListComponent,TranslateModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OceanAppDemo';
  constructor(public translate: TranslateService) {
    this.translate.addLangs(["en","fr","pt"]);
    this.translate.use("en");
  }

  onLangChange(lang: string) {
    this.translate.use(lang);  
  }
 
}
