import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {VideosService} from "../../../../services/videos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  @Input() threshold = 20;

  listVideos: Array<any> = [];
  window!: Window;

  constructor(private video: VideosService, private el: ElementRef,private route: ActivatedRoute,
              private router: Router ) {
  }

  end = false;
  page = 0;

  ngOnInit() {
    this.window = window;
    this.getVideos();
  }

  getVideos() {
    this.video.getVideos(this.page).subscribe(
      (videos) => {
        this.listVideos.push(...videos.content)
        this.end = this.page >= videos.totalPages;
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
      const element = event.target.documentElement;
      const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

      // height of whole window page
      const heightOfWholePage = this.window.document.documentElement.scrollHeight;

      // how big in pixels the element is
      const heightOfElement = this.el.nativeElement.scrollHeight;

      // currently scrolled Y position
      const currentScrolledY = this.window.scrollY;

      // height of opened window - shrinks if console is opened
      const innerHeight = this.window.innerHeight;

      /**
       * the area between the start of the page and when this element is visible
       * in the parent component
       */
      const spaceOfElementAndPage = heightOfWholePage - heightOfElement;

      // calculated whether we are near the end
      const scrollToBottom =
        heightOfElement - innerHeight - currentScrolledY + spaceOfElementAndPage;

      // if the user is near end
      if (scrollToBottom < this.threshold) {
        this.page = this.page + 1;
        this.getVideos();
      }
    }

  goTo(idVideo:any) {
    this.router.navigate(['/video/' + idVideo]);
  }
}
