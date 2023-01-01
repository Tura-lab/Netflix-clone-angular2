import { Component } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(readonly sidenavService: SidenavService){}

  genres = [
    'Action',
    'Western' ,
    'War',
    'Thriller',
    'TV-Movie',
    'Science-Fiction',
    'Romance',
    'Mystery',
    'Music',
    'Horror',
    'History',
    'Fantasy',
    'Family',
    'Drama',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary'
  ]
}
