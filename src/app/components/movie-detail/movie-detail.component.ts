import { Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ '../../../../node_modules/bootstrap/dist/css/bootstrap.css', './movie-detail.component.css' ],
})
export class MovieDetailComponent {
  @Input() movieId: number;
  @Input() type: string;

  starRating: number;
  movieRuntime: string;

  imageUrl: string = 'https://image.tmdb.org/t/p/w500';
  movie: Movie | null;

  showTrailer: boolean = false;

  constructor(
    readonly movieService: MovieService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit() {
    this.movieService.isLoading.next(true);
    this.movieService.getMovieById('movie', this.data.id).subscribe((movie) => {
      this.movie = movie;
      this.starRating = Number((movie.vote_average / 2).toFixed(1));
      this.movieRuntime = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
      this.movieService.isLoading.next(false);
    });
  }

  handleClick(movie: any) {
    if (this.showTrailer){
      this.showTrailer = false;
      return
    }
    this.showTrailer = true;
    this.movieService.getSelectedMovie(movie);
    this.movieService.getTrailer(movie.first_air_date ? 'tv' : 'movie', movie.id);
    this.movieService.toggleSelectedMovie(movie);
  }
}
