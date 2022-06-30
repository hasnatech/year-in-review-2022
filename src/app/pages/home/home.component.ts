import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Container, Main } from 'tsparticles';
import { TimelineMax } from 'gsap';
// import * as  Rellax from 'rellax';
// import * as ScrollMagic from 'ScrollMagic';
import gsap from 'gsap/all';
import { CSSPlugin } from "gsap/CSSPlugin";
import { ViewportScroller } from '@angular/common';
import { MainService } from 'src/app/service/main.service';


//import Parallax from 'parallax-js';

// declare var ScrollMagic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {




  texts = ['Demands', 'Insights', 'Learning'];
  count = 0;
  index = 0;
  decrement = 0;
  currentText = '';
  letter = '';
  currentWord;
  currentLetter;
  color = "color1";
  text = "Demand";

  id = 1

  cards;

  // ctrl = new ScrollMagic.Controller();
  constructor(private viewportScroller: ViewportScroller, public service: MainService) {
    this.cards = service.menu;
  }
  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngAfterViewInit(): void {
    gsap.registerPlugin(CSSPlugin)

    var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene, {
    //   relativeInput: true
    // });

    // parallaxInstance.friction(0.2, 0.2);


    //this.typeWrite();
    // var rellax = new Rellax('.rellax', {
    //wrapper:'#my-scrollbar',
    // center: true
    // });
    //var controller = new ScrollMagic.Controller();
    /* var wipeAnimation = new TimelineMax()
       // animate to second panel
       .to("#slideContainer", 0.5, { z: -150 })		// move back in 3D space
       .to("#slideContainer", 1, { x: "-25%" })	// move in to first panel
       .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
       // animate to third panel
       .to("#slideContainer", 0.5, { z: -150, delay: 1 })
       .to("#slideContainer", 1, { x: "-50%" })
       .to("#slideContainer", 0.5, { z: 0 })
       // animate to forth panel
       .to("#slideContainer", 0.5, { z: -150, delay: 1 })
       .to("#slideContainer", 1, { x: "-75%" })
       .to("#slideContainer", 0.5, { z: 0 });

     // create scene to pin and link animation
     new ScrollMagic.Scene({
       triggerElement: "#pinContainer",
       triggerHook: "onLeave",
       duration: "500%"
     })
       .setPin("#pinContainer")
       .setTween(wipeAnimation)
       .addIndicators() // add indicators (requires plugin)
       .addTo(controller);*/
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }



  sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  typeWrite = (async () => {
    if (this.count == this.texts.length) {
      this.count = 0;
    }
    this.currentWord = this.texts[this.count];
    //this.currentLetter = this.currentWord.slice(0, ++this.index);
    this.currentLetter = this.currentWord;
    document.querySelector(".typing").textContent = this.currentLetter;
    if (this.index == this.currentWord.length) {
      document.querySelector(".cursor").classList.add("animate")
      await this.sleep(2500);
      document.querySelector(".cursor").classList.remove("animate")
      this.currentLetter = this.currentWord;
      /*while (this.index > 0) {
        this.currentLetter = this.currentWord.slice(0, --this.index);
        document.querySelector(".typing").textContent = this.currentLetter;
        await this.sleep(50);
      }*/
      this.count++;
      this.index = 0;
      await this.sleep(500);
    }
    setTimeout(this.typeWrite, Math.random() * 200 + 50);
  });
  //typeWrite();

}
