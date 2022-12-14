import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-hor-slider',
  templateUrl: './hor-slider.component.html',
  styleUrls: ['./hor-slider.component.css']
})
export class HorSliderComponent {
  trendingMovies: any[] = [];
  popularMovies: any[] = [];
  newMovies: any[] = [];
  imageUrl: string = 'https://image.tmdb.org/t/p/w500';

  @Input() trendTime: string = 'week';
  @Input() showType: string = 'tv';

  constructor(readonly movieService: MovieService){}

  ngOnInit() {
    this.movieService.getMovies(this.trendTime, this.showType, 'trending')
    this.movieService.getPopular(this.showType).subscribe(movies => this.popularMovies = movies.results);
  }


}
