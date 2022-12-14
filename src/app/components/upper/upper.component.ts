import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upper',
  templateUrl: './upper.component.html',
  styleUrls: ['./upper.component.css']
})
export class UpperComponent {

  imageUrl: string = 'https://image.tmdb.org/t/p/w1280';

  movie:any;

  constructor(readonly movieService: MovieService){
    console.log(this.movieService.movie)
    this.movieService.movie.subscribe(movie => this.movie = movie)

  }

}
