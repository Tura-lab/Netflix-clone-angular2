import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import { Component,  Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})

export class TrailerComponent {
  selectedMovie: any;
  hasSelectedMovie: boolean = false;
  trailer: string;

  @Input() trailerHeight: string = '400px'

  constructor(private movieService: MovieService, readonly sanitizer: DomSanitizer){
    this.movieService.selectedMovie.subscribe(movie => this.selectedMovie = movie);
    this.movieService.hasSelectedMovieObs.subscribe(val => this.hasSelectedMovie = val);
    this.movieService.trailerSubjectObs.subscribe(trailer => {
      this.trailer = "https://www.youtube.com/embed/" + trailer.results[0].key + "?autoplay=1"});
  }

  ngOnInit() {}

  trailerLoaded() {
    this.movieService.trailerIsLoading.next(false);
  }

}
