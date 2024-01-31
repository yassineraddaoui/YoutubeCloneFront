import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./components/user/user/user.component";
import {VideoComponent} from "./components/user/video/video.component";

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'video/:id', component: VideoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
