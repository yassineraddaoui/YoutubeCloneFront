import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./components/user/user/user.component";
import {VideoComponent} from "./components/user/video/video.component";
import {SearchVideoComponent} from "./components/user/search-video/search-video.component";

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'search/:keyword', component: SearchVideoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
