import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/movie';

@Component({
  selector: 'app-hor-slider',
  templateUrl: './hor-slider.component.html',
  styleUrls: ['./hor-slider.component.css']
})

export class HorSliderComponent {

  movieIsSelected: boolean = false;
  selectedType: string;

  subs: Subscription[] = [];


  @Input() movies: Movie[];
  @Input() title: string;

  constructor(readonly movieService: MovieService){
    this.subs.push(this.movieService.hasSelectedMovieObs.subscribe(val => this.movieIsSelected = val))
    this.subs.push(this.movieService.selectedMovieTypeObs.subscribe(val => this.selectedType = val))
  }

  ngOnInit() {}

  handleClick(movie: any) {
    this.movieService.toggleSelectedMovieType(this.title);
    this.movieService.getSelectedMovie(movie);
    this.movieService.getTrailer(movie.first_air_date ? 'tv' : 'movie', movie.id);
    this.movieService.toggleSelectedMovie(movie);
  }

}
