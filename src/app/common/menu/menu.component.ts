import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {



  linkArr = [];
  linkId = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
  currentActive = 0;

  constructor(private viewportScroller: ViewportScroller, public service: MainService) { }

  ngAfterViewInit(): void {
    this.linkArr = [
      document.getElementById("one"),
      document.getElementById("two"),
      document.getElementById("three"),
      document.getElementById("four"),
      document.getElementById("five"),
      document.getElementById("six"),
      document.getElementById("seven"),
    ]
    //console.log(this.linkArr)
  }

  public onClick(elementId: number): void {
    this.viewportScroller.scrollToAnchor(this.linkId[elementId]);
  }
  space = 50;
  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    for (let i = 0; i < this.linkArr.length; i++) {
      if (this.linkArr[i] != null &&
        window.pageYOffset >= this.linkArr[i].offsetTop &&
        window.pageYOffset < this.linkArr[i + 1].offsetTop - 100
      ) {
        this.currentActive = i + 1;
        console.log(this.currentActive)
      }
    }
  }
}
