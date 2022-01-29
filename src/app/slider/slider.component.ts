import { SlideStory } from './../../../model/story.model';
import { HttpServiceService } from './../Service/http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public size = 0;
  public storySlide: SlideStory[] = [];
  constructor(private httpServerService: HttpServiceService) { }

  ngOnInit(): void {
    this.httpServerService.getSlideStory().subscribe((data:any) => {
      this.storySlide = data;
    });
  }
}
