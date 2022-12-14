import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css']
})
export class UpperComponent {

  imageUrl: string = 'https://image.tmdb.org/t/p/w1280';

  constructor(readonly movieService: MovieService){}



}
