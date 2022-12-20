import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { endPoints } from '../endPoints';
import { Movie } from 'src/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  m: Movie;
  allMoviesSubject = new Subject<any>();
  movies = this.allMoviesSubject.asObservable();

  singleMovieSubject = new BehaviorSubject<any>({});
  movie = this.singleMovieSubject.asObservable();

  selectedMovieSubject = new BehaviorSubject<any>({});
  selectedMovie = this.selectedMovieSubject.asObservable();

  hasSelectedMovieSubject = new Subject<boolean>();
  hasSelectedMovieObs = this.hasSelectedMovieSubject.asObservable();
  hasSelectedMovie = false;

  selectedMovieTypeSubject = new Subject<string>();
  selectedMovieTypeObs = this.selectedMovieTypeSubject.asObservable();

  trailerSubject = new BehaviorSubject<any>({});
  trailerSubjectObs = this.trailerSubject.asObservable();

  apiKey: string = '90a8fcde0549594bfdbe797e1f5f650d';
  baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) {}
  // https://api.themoviedb.org/3/movie/715931/videos?api_key=90a8fcde0549594bfdbe797e1f5f650d


  getSelectedMovie(movie: any) {
    this.selectedMovieSubject.next(movie);
    console.log(movie)
  }

  toggleSelectedMovieType(newType:string) {
    this.selectedMovieTypeSubject.next(newType)
  }

  toggleSelectedMovie(movie: any) {
    this.hasSelectedMovie = this.hasSelectedMovie && this.m && this.m.id === movie.id ? false : true
    this.hasSelectedMovieSubject.next(this.hasSelectedMovie);
    this.m = movie;
  }

  getTrailer(showType:string, id:number) {
    this.httpClient.get<any>(this.baseUrl + `/${showType}/${id}/videos` + '?api_key=' + this.apiKey).subscribe(t => {
      console.log(this.baseUrl + `/${showType}/${id}/videos` + '?api_key=' + this.apiKey)
      console.log(t.results,34234)
      this.trailerSubject.next(t);
    })
  }

  getTrending(): Observable<any> {
    const res = this.httpClient.get<any>(this.baseUrl + endPoints.TRENDING + '?api_key=' + this.apiKey)

    res.subscribe(movies => {
      this.allMoviesSubject.next(movies.results);

      let cur = movies.results[Math.floor(Math.random() * movies.results.length)];

      this.singleMovieSubject.next(cur)
    });

    return res;
  }

  getPopular(): Observable<any> {
    return this.httpClient.get<Movie[]>(this.baseUrl + endPoints.POPULAR + '?api_key=' + this.apiKey)
  }

}
