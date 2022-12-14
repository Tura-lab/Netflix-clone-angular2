import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { endPoints } from '../endPoints';
import { Movie } from 'src/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  isLoading = new BehaviorSubject<boolean>(false);
  isLoadingObs = this.isLoading.asObservable();

  trailerIsLoading = new BehaviorSubject<boolean>(false);
  trailerIsLoadingObs = this.trailerIsLoading.asObservable();

  genres = new Map()

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

  constructor(private httpClient: HttpClient) {
    this.genres.set('Action', 28);
    this.genres.set('Western' , 37);
    this.genres.set('War' , 10752);
    this.genres.set('Thriller' , 53);
    this.genres.set('TV-Movie' , 10770);
    this.genres.set('Science-Fiction' , 878);
    this.genres.set('Romance' , 10749);
    this.genres.set('Mystery' , 9648);
    this.genres.set('Music' , 10402);
    this.genres.set('Horror' ,27);
    this.genres.set('History' , 36);
    this.genres.set('Fantasy' , 14);
    this.genres.set('Family' , 10751);
    this.genres.set('Drama' , 18);
    this.genres.set('Animation' , 16);
    this.genres.set('Comedy' , 35);
    this.genres.set('Crime' , 80);
    this.genres.set('Documentary' , 99);
  }

  getMovieById(type: string, id:number): Observable<Movie> {
    let url = `${this.baseUrl}/${type}/${id}?api_key=${this.apiKey}`;

    return this.httpClient.get<Movie>(url);
  }

  getMoviesByGenre(genre:string, page: number): Observable<any> {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${this.genres.get(genre)}&page=${page}`;
    console.log(url)

    return this.httpClient.get<Movie[]>(url);
  }

  getSelectedMovie(movie: any) {
    this.selectedMovieSubject.next(movie);
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
    this.trailerIsLoading.next(true);
    console.log('herererereeerer')

    this.httpClient.get<any>(this.baseUrl + `/${showType}/${id}/videos` + '?api_key=' + this.apiKey).subscribe(t => {
      this.trailerSubject.next(t);
      this.trailerIsLoading.next(false);
    })
  }

  getTrending(): Observable<any> {
    this.isLoading.next(true)
    const res = this.httpClient.get<any>(this.baseUrl + endPoints.TRENDING + '?api_key=' + this.apiKey)

    res.subscribe(movies => {
      this.allMoviesSubject.next(movies.results);

      let cur = movies.results[Math.floor(Math.random() * movies.results.length)];

      this.singleMovieSubject.next(cur)
      this.isLoading.next(false)
    });

    return res;
  }

  getPopular(): Observable<any> {
    return this.httpClient.get<Movie[]>(this.baseUrl + endPoints.POPULAR + '?api_key=' + this.apiKey)
  }

}
