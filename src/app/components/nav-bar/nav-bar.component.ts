import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;

  constructor(readonly sidenavService: SidenavService){}

  closeMenu(){
    this.menu.closeMenu();
  }

  openMenu() {
    this.menu.openMenu();
  }
}
