import { Component, HostListener, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss']
})
export class FloatingBtnComponent implements OnInit {

  step = 0;

  ids = ["home", "first", "one", "two", "two_2", "two_2a", "three", "three_1", "four", "four_1", "four_2", "five"];

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }
  goto(i) {
    if (i < this.ids.length && i >= 0) {
      this.step = i;
      console.log(this.ids[i]);
      this.service.gotoId(this.ids[i]);
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    // console.log(window.pageYOffset, this.reOffset + this.space * 3);
    // console.log(this.ids);
    for (let i = 0; i < this.ids.length; i++) {
      let elem = document.getElementById(this.ids[i]) as HTMLDivElement;
      let nextelem = document.getElementById(this.ids[i + 1]) as HTMLDivElement;
      //  console.log(i, this.step, window.pageYOffset, elem.offsetTop, nextelem.offsetTop );
      if (
        window.pageYOffset >= elem.offsetTop &&
        window.pageYOffset < nextelem.offsetTop
      ) {
        this.step = i;
        // console.log(this.ids[this.step]);
      }
    }
  }
}
