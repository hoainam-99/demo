import { SlideStory, StoriesList } from './../../../model/story.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private httpClient: HttpClient) { }

  public getSlideStory() :Observable<any>{
    const url = `${this.REST_API_SERVER}/storySlide`;
    console.log(url);
    return this.httpClient.get<SlideStory[]>(url, this.httpOption);
  }

  public getStoriesList() :Observable<any>{
    const url = `${this.REST_API_SERVER}/storiesList`;
    return this.httpClient.get<StoriesList[]>(url, this.httpOption);
  }
}
