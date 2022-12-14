import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

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
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

const appRoutes: Routes = [
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
    MovieComponent,
    MovieDetailComponent,
    StarRatingComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    MatMenuModule,
    MatIconModule,
    InfiniteScrollModule,
    NgxSkeletonLoaderModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MovieDetailComponent]
})
export class AppModule { }
