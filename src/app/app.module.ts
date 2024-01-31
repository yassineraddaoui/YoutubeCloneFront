import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchBarComponent} from './components/layout/search-bar/search-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from "./AuthInterceptor";
import { UserComponent } from './components/user/user/user.component';
import {IndexComponent} from "./components/user/index/index.component";
import { VideoComponent } from './components/user/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    IndexComponent,
    UserComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
