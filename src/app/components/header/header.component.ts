import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  trendingMovies: any[] = [];

  @Input() trendTime: string = 'week';
  @Input() showType: string = 'tv';

  constructor(private movieService: MovieService){}

  ngOnInit() {}


}
