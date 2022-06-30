import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {

  @ViewChild('innovation', { static: false }) innovation: HTMLImageElement;
  @ViewChild('holder1', { static: false }) holder1;
  @ViewChild('holder2', { static: false }) holder2;

  holder = 0;
  constructor() { }

  ngOnInit(): void {
  }
  example_id = 0;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    navSpeed: 1500,
    navText: ['<div  class="l-arrow">  <img src="assets/images/dark/left_1.png" alt=""> </div>', '<div class="r-arrow">  <img src="assets/images/dark/right_1.png" alt=""> </div>'],
    responsive: {
      0: {
        items: 1
      }
    },
    // nav: true
  }

  marketing_1 = [
    {
      "image": "assets/images/dark/thumb_1.png",
      "text": "Digital Learning Win: Maia Giorgadze",
      "link": "https://web.microsoftstream.com/video/599405c5-218c-48ab-a707-7f7d75efb995"
    },
    {
      "image": "assets/images/dark/thumb_2.png",
      "text": "Digital Learning Win - Chet Womack",
      "link": "https://web.microsoftstream.com/video/615ce27b-c77c-4fc5-a423-f78fb8d2a83b"
    },
    {
      "image": "assets/images/dark/thumb_3.png",
      "text": "Additional Success Stories",
      "link": "https://degreed.com/plan/1307333#/"
    }
  ]
  product_1 = [
    {
      "image": "assets/images/dark/thumb_4.png",
      "text": "29 Marketing Canvas",
      "link": "https://web.microsoftstream.com/video/ad411b45-bb08-4706-a827-3254febd3656"
    },
    {
      "image": "assets/images/dark/thumb_5.png",
      "text": "Marketing Canvas Toolkit",
      "link": "https://web.microsoftstream.com/video/615ce27b-c77c-4fc5-a423-f78fb8d2a83b"
    },
    {
      "image": "assets/images/dark/thumb_6.png",
      "text": "The Success Coach",
      "link": ""
    }
  ]

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // this.holder1.nativeElement.style.right = 50 + '%';
    this.holder1.nativeElement.style.bottom = 43 + '%';
    this.holder2.nativeElement.style.bottom = 56 + '%';

  }

}
