import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  endpoint: string = 'http://localhost:8080/video';

  constructor(private http : HttpClient) { }
  getVideos(page : number){
    let api = `${this.endpoint}?page=${page}`;
    return this.http.get<any>(api);
  }
  getVideo(id : string){
    let api = `${this.endpoint}/${id}`;
    return this.http.get<any>(api);
  }
  searchVideo(title:string,page:number){
    let api = `${this.endpoint}/search/${title}?page=${page}`;
    return this.http.get<any>(api);
  }

}
