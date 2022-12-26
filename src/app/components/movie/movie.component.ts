import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie: Movie;
  @Input() height: string;
  @Input() width: string;

  @Output() movieClicked = new EventEmitter<Movie>;

  imageUrl: string = 'https://image.tmdb.org/t/p/w500';

  handleClick() {
    this.movieClicked.emit(this.movie)
  }

}
