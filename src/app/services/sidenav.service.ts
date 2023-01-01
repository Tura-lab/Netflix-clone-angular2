import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  drawerStatus: boolean = false;

  constructor() { }

  changeDrawerStatus() {
    this.drawerStatus = !this.drawerStatus;
  }
}
