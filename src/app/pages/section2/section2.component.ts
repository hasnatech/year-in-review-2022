import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements AfterViewInit {

  constructor(public service: MainService) {
    // gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger)

    // let chart = document.getElementById("bar-chart111");
    let fills = document.querySelectorAll("#bar-chart111 .bar");
    let number = document.querySelectorAll("#bar-chart111 .number");
    let _marker = false;

    for (let i = 0; i < fills.length; i++) {
      const element = fills[i];
      gsap.fromTo(element, {
        width: 0
      }, {
        scrollTrigger: {
          trigger: "#bar-chart111",
          markers: _marker,
          start: "-200%"
        },
        transformOrigin: "left center",
        width: element.getAttribute("data-per"), duration: 1
      });
    }
    gsap.fromTo(number, {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: "#bar-chart111",
        markers: _marker,
        start: "-200%"
      },
      opacity: 1,
      duration: 1
    });

    // gsap.from(number, {
    //   scrollTrigger: {
    //     trigger: "#bar-chart111",
    //     markers: _marker,
    //     start: "top center"
    //   },
    //   textContent: 0,
    //   duration: 2,
    //   ease: Power1.easeIn,
    //   snap: { textContent: 1 },
    //   // stagger: 1,
    //   // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    // });
  }
}
