import {Component, OnInit} from '@angular/core';
import {VideosService} from "../../../../services/videos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{

  id!:string;
  constructor(private videosService:VideosService,private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.getVideo()
  }
  getVideo(){
    this.videosService.getVideo(this.id)
      .subscribe(
        (x)=>console.log(x)
      )
  }

}
