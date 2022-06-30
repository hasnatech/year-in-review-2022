import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-texth',
  templateUrl: './texth.component.html',
  styleUrls: ['./texth.component.scss']
})
export class TexthComponent implements OnInit {

  textArr = ["Insights", "Demands", "Learning Trends"];
  textSplitArr = [];
  textIndex = 0;
  displayText = "";
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.changeText(0);
    this.cdr.detectChanges();
  }
  tl;
  time = 1;
  changeText(i) {
    // this.animate();
    // setInterval(() => {
    //   this.animate();
    // }, this.time * 3 * 2 * 1000);

    this.tl = gsap.from(".anim1234", {
      y: "100%",
      skewY: "20",
      opacity: 0,
      stagger: this.time,
      yoyo: true,
      repeat: -1,
    }).repeatDelay(1)

    //gsap.delayedCall(this.time, this.stopAnimation);
  }
  animate() {
    console.log("animate");
    this.tl = gsap.fromTo(".anim1234", {
      y: "100%",
      opacity: 0,
    }, {
      y: "0",
      opacity: 1,
      stagger: this.time,
      repeat: 1,
      yoyo: true
      //repeat: -1,
    })
  }
  stopAnimation() {
    this.tl.pause()
  }
  ngOnInit(): void {
  }

}
