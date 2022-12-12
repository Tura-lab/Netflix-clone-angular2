import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  subject = new Subject<any>();
  curMovies: any;
  apiKey: string = '90a8fcde0549594bfdbe797e1f5f650d';
  baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) {}

  getMovies(trendTime:string, showType:string, whatMovies:string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${whatMovies}/${showType}/${trendTime}?api_key=${this.apiKey}`)
  }


  getPopular(showType:string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${showType}/popular?api_key=${this.apiKey}`)
  }

}
