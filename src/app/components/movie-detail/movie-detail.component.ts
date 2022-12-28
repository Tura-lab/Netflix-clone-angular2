import { Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  @Input() movieId: number;
  @Input() type: string;

  starRating: number = 4.3;
  imageUrl: string = 'https://image.tmdb.org/t/p/w500';
  movie: Movie | null;

  constructor(
    readonly movieService: MovieService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit() {
    this.movieService.isLoading.next(true);
    this.movieService.getMovieById('movie', this.data.id).subscribe((movie) => {
      this.movie = movie;
      this.movieService.isLoading.next(false);
    });
  }
}
