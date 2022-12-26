import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { Movie } from 'src/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularMovies: Movie[];
  trendingMovies: Movie[];
  top_rated: Movie[];
  upcomming: Movie[];
  latest: Movie[];

  subs: Subscription[] = [];

  constructor(private movieServie: MovieService) {
    this.subs.push(this.movieServie.getPopular().subscribe(movies => this.popularMovies = movies.results));
    this.subs.push(this.movieServie.getTrending().subscribe(movies => this.trendingMovies = movies.results));
  }
}
