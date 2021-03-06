import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }
  
  title = '3phasic';

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
