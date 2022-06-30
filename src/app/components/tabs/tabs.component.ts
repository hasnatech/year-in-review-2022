import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  selectedTab = 1;

  constructor() { }

  ngOnInit(): void {
  }

  example_id = 0;


  customer = {
    "type": "slider_contacts",
    "title": {
      "type": "text-singleline",
      "text": "Learner Testimonials",
      "label": "Page Title"
    },
    "subtitle": {
      "type": "text-singleline",
      "text": `Learner <span class="colortext">Testimonials</span>`,
      "label": "Page Title"
    },
    "contactslides": [
      {
        "text": "All the concepts are very applicable in our daily routine, really helping Cargill to continuing change and growing",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Claudia.png",
          "alt": "person"
        },
        "name": "Claudia Quintanilla Alcantara",
        "place": "HR Solutions - Talent Consultant, Nicaragua"
      },
      {
        "text": "The course content is helpful and relevant to be connected to Cargill's goals through a course like this. It helps to strengthen the understanding and purpose of <br>Cargill's GPS",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Jacie Grant.png",
          "alt": "person"
        },
        "name": "Jacie Grant",
        "place": "Protein BOSC Training Lead Dayton, Virginia"
      },
      {
        "text": "Interesting and timely lessons especially as Cargill seems to be at a pivoting point of transformation. Great to be part of this change, and hopefully apply the learnings and contribute towards this transformation",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Valeria Bujniewicz.png",
          "alt": "person"
        },
        "name": "Valeria Bujniewicz",
        "place": "HR Solutions Argentina"
      },
      {
        "text": "It really helped me to learn about innovation mindset and be an experiment champion. I really enjoyed the materials",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Ruel White.png",
          "alt": "person"
        },
        "name": "Ruel White",
        "place": "SCP COE"
      },
      {
        "text": "The faculty member has delivered the course content very well. I like the variety of the course model i.e., lecture, application challenge, live case, interaction <br>with Sponsors",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Joachim.png",
          "alt": "person"
        },
        "name": "Joachim Serventon",
        "place": "Supply Chain Manager, Geneva"
      }
    ]
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1500,
    navText: ["<div class='mk_prev'><img src='assets/images/dark/right_1.png'> </div>", "<div class='mk_next'><img src='assets/images/dark/right_1.png'></div>"],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
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
}