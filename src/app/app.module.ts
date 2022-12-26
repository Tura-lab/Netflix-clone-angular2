import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { UpperComponent } from './components/upper/upper.component';
import { HorSliderComponent } from './components/hor-slider/hor-slider.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrailerComponent } from './components/trailer/trailer.component';

import { Pipe, PipeTransform} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { GenreComponent } from './components/genre/genre.component';
import { MovieComponent } from './components/movie/movie.component';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genres/:genre', component: GenreComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    UpperComponent,
    HorSliderComponent,
    TrailerComponent,
    HomeComponent,
    SafePipe,
    GenreComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouts),
    MatMenuModule,
    MatIconModule,
    InfiniteScrollModule,
    NgxSkeletonLoaderModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
