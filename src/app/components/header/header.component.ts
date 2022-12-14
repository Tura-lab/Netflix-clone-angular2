import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageUrl: string = 'https://image.tmdb.org/t/p/w500';
  movie: any;

  @Input() trendTime: string = 'week';
  @Input() showType: string = 'tv';

  constructor(private movieService: MovieService){
    this.movieService.movie.subscribe(movie => {
      console.log(movie)
      this.movie = movie});
  }

  ngOnInit() {}


}
