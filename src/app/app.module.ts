import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { YouTubePlayerModule } from '@angular/youtube-player'

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { UpperComponent } from './components/upper/upper.component';
import { HorSliderComponent } from './components/hor-slider/hor-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrailerComponent } from './components/trailer/trailer.component';

import { Pipe, PipeTransform} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    UpperComponent,
    HorSliderComponent,
    TrailerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
