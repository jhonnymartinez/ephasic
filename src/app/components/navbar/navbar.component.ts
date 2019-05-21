import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isToggled = false;

  constructor() { }

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

}
