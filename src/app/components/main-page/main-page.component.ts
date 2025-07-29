import { Component } from '@angular/core';
import { MultimediaService } from '../../services/multimedia-service';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent{
  videos: any;

  constructor(private multimediaService: MultimediaService) { }

  search(query: string) {
    this.multimediaService.searchVideos(query).subscribe(response => {
      this.videos = response.items;
      console.dir(this.videos);
    });
  }

  
}
