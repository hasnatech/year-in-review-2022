import { AfterViewInit, Component, HostListener } from '@angular/core';
import { MainService } from './service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  loading = true;
  ngAfterViewInit(): void {
    /*AOS.init({
      duration: 1000,
      once: true,
    });*/
    // console.log("loading completed");
    const script1 = document.createElement('script');
    //script1.async = true;
    script1.src = '//assets.adobedtm.com/47e3e446470b/b72afcffdbd7/launch-a14b516e7cd5.min.js';
    document.head.appendChild(script1);
    this.checkIfLoaded();
  }
  constructor(public service: MainService) { }
  checkIfLoaded() {
    let ths = this;
    window.addEventListener("load", function (event) {
      setTimeout(() => {
        ths.loading = false;
      }, 1000);
      console.log("All resources finished loading!");
      //here i should do something, either returning false or...
      //...manipulating the isLoading, but i can't access isLoading from here
    });
  }

  @HostListener('window:resize', ['$event']) onResize(event) {

    const page = document.getElementById('page');
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    let scaleW = 1;
    let scaleH = 1;

    if (width < 1024) {
      this.service.showmenu = false
    }

  }
  title = 'year-in-review';
}
