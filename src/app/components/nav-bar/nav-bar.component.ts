import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;

  genres = ['Action', 'Adventure', 'Horror', 'Romance', 'Comedy']

  closeMenu(){
    this.menu.closeMenu();
  }

  openMenu() {
    this.menu.openMenu();
  }

}
