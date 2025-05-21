import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule,CommonModule,RouterModule],
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
