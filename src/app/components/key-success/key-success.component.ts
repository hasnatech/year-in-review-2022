import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, TimelineLite } from 'gsap/all';

@Component({
  selector: 'app-key-success',
  templateUrl: './key-success.component.html',
  styleUrls: ['./key-success.component.scss']
})
export class KeySuccessComponent implements AfterViewInit {


  constructor() { }
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    // gsap.registerPlugin(DrawSVGPlugin);
    let chart = document.getElementById("chart123_878");
    let fills = document.querySelectorAll("#chart123_878 .fill");
    let number = document.querySelectorAll("#chart123_878 .num");
    let _marker = false;
    gsap.fromTo(fills, {
      scaleX: 0
    }, {
      scrollTrigger: {
        trigger: "#trigger_12",
        markers: _marker,
        start: "top center"
      },
      transformOrigin: "left center",
      scaleX: 1, duration: 1
    });
    gsap.fromTo(fills, {
      scaleX: 0
    }, {
      scrollTrigger: {
        trigger: "#trigger_12",
        markers: _marker,
        start: "top center"
      },
      transformOrigin: "left center",
      scaleX: 1, duration: 1
    });
    gsap.from(number, {
      scrollTrigger: {
        trigger: "#trigger_12",
        markers: _marker,
        start: "top center"
      },
      textContent: 0,
      duration: 2,
      ease: Power1.easeIn,
      snap: { textContent: 1 },
      // stagger: 1,
      // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    });



    // let percentageComplete = 0.66;
    // let divSize = 20;
    // let circleSize = 201;

    // //create a timeline with all of the animation in it (linear), but pause it so that we can tap into the timeline's "progress()" function to jump to whereever we want, or even animate it.
    // let tl = new TimelineLite({ paused: true });
    // tl.fromTo(".js-countdown__progress", 1, { drawSVG: "0%", visibility: "visible" }, { drawSVG: "100%", ease: Linear.easeNone })
    //   //animate the container <div> with an offset transform-origin that's placed on the center of the circle
    //   .to("#countdown-progress-label-container", 1, { rotation: 360, transformOrigin: (divSize / 2) + "px " + (circleSize / 2) + "px", ease: Linear.easeNone }, 0)
    // //rotate the inner label in the OPPOSITE direction to counteract the container's rotation, so it appears to never rotate :)
    // // .to("#countdown-progress-label", 1, { rotation: -360, ease: Linear.easeNone }, 0);
  }


}
