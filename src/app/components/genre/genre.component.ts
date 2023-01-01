import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

import { Movie } from 'src/movie';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent {
  @Input() movies: Movie[] = [];

  title: string;
  page: number = 1;
  genre: string;

  subs: Subscription[];

  constructor(
    readonly movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    console.log('Here')
    this.movies = [];
    this.movieService.isLoading.next(true);

    this.route.params.subscribe((params) => {
      let genre = params['genre'];
      this.title = genre;
      this.genre = genre;
      this.page = 1;
      this.movieService
        .getMoviesByGenre(genre, this.page)
        .subscribe((movies) => {
          this.movies = movies.results;
        });
      this.page += 1;
      this.movieService.isLoading.next(true);
      this.movieService
        .getMoviesByGenre(genre, this.page)
        .subscribe((movies) => {
          this.movies.push(...movies.results);
          this.movieService.isLoading.next(false);
        });
    });
  }

  onScroll() {
    this.movieService.isLoading.next(true);
    this.page += 1;
    this.movieService
      .getMoviesByGenre(this.genre, this.page)
      .subscribe((movies) => {
        this.movies.push(...movies.results);
        this.movieService.isLoading.next(false);
      });
  }

  openDialog(movie: Movie): void {

    this.dialog.open(MovieDetailComponent, {
      data: { id: movie.id },
      height: '500px',
      width: '700px',
    });
  }


}
