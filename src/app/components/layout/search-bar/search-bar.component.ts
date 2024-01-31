import {Component} from '@angular/core';
import {VideosService} from "../../../../services/videos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private videoService : VideosService,private router: Router) {
  }
  search(keyword: string) {
    this.router.navigate(['/search/' + keyword]);
  }
}
