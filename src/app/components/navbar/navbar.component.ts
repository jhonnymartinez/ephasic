import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  
  isToggled = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {
  }

  toggleNavbar () {
    this.isToggled = !this.isToggled;
  }

  toggleBtnClass () {
    let output = '';
    if (this.isToggled) {
      output = 'is-active';
    }
    return output;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}
