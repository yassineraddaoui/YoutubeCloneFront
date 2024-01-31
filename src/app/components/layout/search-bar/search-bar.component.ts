import {Component} from '@angular/core';
import {VideosService} from "../../../../services/videos.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private videoService : VideosService) {
  }
  search(value: string) {
   this.videoService.searchVideo(value,0)
     .subscribe((p)=>console.log(p))
  }
}
