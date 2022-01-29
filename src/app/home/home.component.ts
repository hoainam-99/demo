import { StoriesList } from './../../../model/story.model';
import { HttpServiceService } from './../Service/http-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // public storiesList = [
  //   {
  //     img: './assets/img/content-img/van-toc-chi-kiep.jpg',
  //     name: 'Vạn Tộc Chi Kiếp',
  //     newChapters: [
  //       {
  //         chapter: 278,
  //         updateTime: '4 phút trước'
  //       },{
  //         chapter: 277,
  //         updateTime: '1 ngày trước'
  //       },{
  //         chapter: 276,
  //         updateTime: '1 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/dokyuu-hentai-hxeros.jpg',
  //     name: 'Dokyuu Hentai HxEros',
  //     newChapters: [
  //       {
  //         chapter: 23,
  //         updateTime: '26 phút trước'
  //       },{
  //         chapter: 22,
  //         updateTime: '1 ngày trước'
  //       },{
  //         chapter: 21,
  //         updateTime: '1 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/chien-hon-tuyet-the.jpg',
  //     name: 'Chiến Hồn Tuyệt Thế',
  //     newChapters: [
  //       {
  //         chapter: 397,
  //         updateTime: '22 phút trước'
  //       },{
  //         chapter: 396,
  //         updateTime: '2 ngày trước'
  //       },{
  //         chapter: 395,
  //         updateTime: '5 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/isekai-cheat-magic-swordsman.jpg',
  //     name: 'Isekai Cheat Magic Swordsman',
  //     newChapters: [
  //       {
  //         chapter: 15.2,
  //         updateTime: '22 phút trước'
  //       },{
  //         chapter: 15.1,
  //         updateTime: '2 ngày trước'
  //       },{
  //         chapter: 14.2,
  //         updateTime: '5 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/ma-vuong-tro-lai.jpg',
  //     name: 'Ma Vương Trở Lại',
  //     newChapters: [
  //       {
  //         chapter: 26.5,
  //         updateTime: '1 giờ trước'
  //       },{
  //         chapter: 26,
  //         updateTime: '10 ngày trước'
  //       },{
  //         chapter: 25,
  //         updateTime: '14 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/pha-bo-gioi-han.jpg',
  //     name: 'Phá Bỏ Giới Hạn',
  //     newChapters: [
  //       {
  //         chapter: 64,
  //         updateTime: '34 phút trước'
  //       },{
  //         chapter: 63,
  //         updateTime: '6 ngày trước'
  //       },{
  //         chapter: 62,
  //         updateTime: '8 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/su-tro-lai-cua-phap-su-vi-dai-sau-4000-n-7868.jpg',
  //     name: 'Sự Trở Lại Của Pháp Sư Vĩ Đại Sau 4000 Năm',
  //     newChapters: [
  //       {
  //         chapter: 110,
  //         updateTime: '34 phút trước'
  //       },{
  //         chapter: 109,
  //         updateTime: '6 ngày trước'
  //       },{
  //         chapter: 108,
  //         updateTime: '13 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/thien-ma-quan-su.jpg',
  //     name: 'Thiên Ma Quân Sư',
  //     newChapters: [
  //       {
  //         chapter: 25,
  //         updateTime: '34 phút trước'
  //       },{
  //         chapter: 109,
  //         updateTime: '6 ngày trước'
  //       },{
  //         chapter: 108,
  //         updateTime: '13 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/tren-nguoi-ta-co-mot-con-rong.jpg',
  //     name: 'Trên Người Ta Có Một Con Rồng',
  //     newChapters: [
  //       {
  //         chapter: 457,
  //         updateTime: '34 phút trước'
  //       },{
  //         chapter: 456,
  //         updateTime: '6 ngày trước'
  //       },{
  //         chapter: 455,
  //         updateTime: '13 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/vo-luyen-dinh-phong.jpg',
  //     name: 'Võ Luyện Đỉnh Phong',
  //     newChapters: [
  //       {
  //         chapter: 1855,
  //         updateTime: '1 giờ trước'
  //       },{
  //         chapter: 1854,
  //         updateTime: '13 giờ trước'
  //       },{
  //         chapter: 1853,
  //         updateTime: '17 giờ trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/vinh-sinh.jpg',
  //     name: 'Vĩnh Sinh',
  //     newChapters: [
  //       {
  //         chapter: 7,
  //         updateTime: '1 giờ trước'
  //       },{
  //         chapter: 6,
  //         updateTime: '1 ngày trước'
  //       },{
  //         chapter: 5,
  //         updateTime: '1 ngày trước'
  //       }
  //     ]
  //   },{
  //     img: './assets/img/content-img/dai-tuong-quan.jpg',
  //     name: 'Đại Tướng Quân',
  //     newChapters: [
  //       {
  //         chapter: 23,
  //         updateTime: '34 phút trước'
  //       },{
  //         chapter: 22,
  //         updateTime: '6 ngày trước'
  //       },{
  //         chapter: 21,
  //         updateTime: '13 ngày trước'
  //       }
  //     ]
  //   },
  // ];
  public storiesList: StoriesList[] = [];
  constructor(private httpServerService: HttpServiceService) { }

  ngOnInit(): void {
    this.httpServerService.getStoriesList().subscribe((data:any) => {
      this.storiesList = data;
    })
  }

}
