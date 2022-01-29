import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { HeaderTaskbarComponent } from './header-taskbar/header-taskbar.component';
import { SliderComponent } from './slider/slider.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { HomeComponent } from './home/home.component';
import { HotComponent } from './hot/hot.component';
import { FollowComponent } from './follow/follow.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';
import { GirlsComponent } from './girls/girls.component';
import { BoysComponent } from './boys/boys.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBannerComponent,
    HeaderTaskbarComponent,
    SliderComponent,
    ContentMainComponent,
    HomeComponent,
    HotComponent,
    FollowComponent,
    HistoryComponent,
    SearchComponent,
    GirlsComponent,
    BoysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
