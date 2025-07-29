import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  private readonly apiKey = "AIzaSyDkHoXNqwGA2f-IYDw1HYH2ancZm4BWuIo";
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) { }

  searchVideos(query: string, maxResults: number = 4): Observable<any> {
    const url = `${this.apiUrl}/search?part=snippet&q=${query}&key=${this.apiKey}&type=video&maxResults=${maxResults}`;
    return this.http.get(url);
  }




  
// сделать возврат - какое-то видео с ютуба по поисковому слову
// вывести на консольк и на экран

// AIzaSyDkHoXNqwGA2f-IYDw1HYH2ancZm4BWuIo

}
