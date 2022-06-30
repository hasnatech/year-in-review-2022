import { AfterViewInit, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements AfterViewInit {

  @Input() data
  @ViewChild('frontPanel1') frontPanel1: ElementRef;
  @ViewChild('item') item: ElementRef;
  newX = 0;
  itemId = 0;

  customOptions: OwlOptions = {
    loop: true,
    autoHeight: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    nav: true,
    dots: true,
    navSpeed: 700,
    autoplayTimeout: 3000,
    navText: ['<div  class="l-arrow">  <img src="assets/images/dark/left_1.png" alt=""> </div>', '<div class="r-arrow">  <img src="assets/images/dark/right_1.png" alt=""> </div>'],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },

  }
  @ViewChild('carousel', { static: true }) carousel: CarouselComponent;
  constructor(@Inject(PLATFORM_ID) private _platformId: Object) { }
  ngAfterViewInit(): void {
    // if (isPlatformBrowser(this._platformId)) {
    // setTimeout(() => {
    //   const nav = document.querySelector(".slider_contact .owl-nav").innerHTML;
    //document.querySelector(".slider_contact .owl-nav").innerHTML = "";
    //document.querySelector(".slider_contact .flexarrow").innerHTML = nav;

    /*const anyService = this.carousel as any;
    const carouselService = anyService.carouselService as CarouselService;
    carouselService.update();*/
    //   }, 5000);
    // }

    setTimeout(() => {
      let panel = document.getElementById("learner_testimonial");
      let left = panel.querySelector(".owl-prev");
      let right = panel.querySelector(".owl-next");
      panel.querySelector(".owl-dots").insertBefore(left, panel.querySelector(".owl-dots").firstChild);
      panel.querySelector(".owl-dots").appendChild(right);
      // this.carousel.querySelector(".owl-dots").appendToLastChild(left);

    }, 100);
  }

  next() {
    this.carousel.next();
  }
  prev() {
    this.carousel.prev();
  }

  hover(b) {
    if (b) {
      this.carousel.stopAutoplay();
    } else {
      this.carousel.startAutoplay();
    }
  }
}
