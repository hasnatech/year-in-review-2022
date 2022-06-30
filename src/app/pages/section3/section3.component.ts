import { Component, OnInit } from '@angular/core';
import gsap from 'gsap/all';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  selectedTab = 1
  activity2 = 1;
  constructor(public service: MainService) { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1500,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }


  customer = {
    "type": "slider_contacts",
    "title": {
      "type": "text-singleline",
      "text": "Our Success",
      "label": "Page Title"
    },
    "subtitle": {
      "type": "text-singleline",
      "text": "Voice of the Facilitator",
      "label": "Page Title"
    },
    "contactslides": [
      {
        "text": "The Learning experience has changed; we need to walk the talk and support employees to this new way of learning. If we connect, advocate, and embrace the virtual learning environment, our employees will be open to explore new ways to learn; after all, we are human beings who need to feel connected and communicated with—we are just changing the vehicle.",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Claudia.png",
          "alt": "person"
        },
        "name": "Claudia Quintanilla Alcantara",
        "place": "HR Solutions - Talent Consultant, Nicaragua"
      },
      {
        "text": "Being a virtual facilitator allows me to work with my Cargill peers in a completely different way than how I worked in the Dayton, VA plant. I have the opportunity to connect with people around the globe, gain new perspectives, and share my own. This role is important to me because learning and teaching are two of my passions and values. In this space, I continue to grow and have the ability to engage others in a way that facilitates their own growth at the same time.",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Jacie Grant.png",
          "alt": "person"
        },
        "name": "Jacie Grant",
        "place": "Protein BOSC Training Lead Dayton, Virginia"
      },
      {
        "text": "Being a facilitator made me grow a lot. It gave me the possibility to connect with other facilitators in LATAM, to connect with my group from different countries, to learn from their experiences, their countries, their roles, their difficulties—which we as employees of the same company may go through.",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Valeria Bujniewicz.png",
          "alt": "person"
        },
        "name": "Valeria Bujniewicz",
        "place": "HR Solutions Argentina"
      },
      {
        "text": "Being a virtual facilitator is like a challenge, since you get an opportunity not only teach but also help others and explain them how the information applies to the different Cargill businesses. It's a really great way to get more involved at Cargill beyond my day-day role, where you get the chance to learn as much from the course as the learners.",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Ruel White.png",
          "alt": "person"
        },
        "name": "Ruel White",
        "place": "SCP COE"
      },
      {
        "text": "Being a virtual facilitator is a great experience to share learnings and learn from others. I have been privileged to talk to so many colleagues with diverse background and experiences— diversity of backgrounds really makes a difference during the digital course of learning. It also brings satisfaction to see the trainees completing the digital courses whilst growing their knowledge to be ready to apply learnings at Cargill.",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Joachim.png",
          "alt": "person"
        },
        "name": "Joachim Serventon",
        "place": "Supply Chain Manager, Geneva"
      },
      {
        "text": "What started as a focus on giving back to Cargill for all it has done for me, quickly transformed into an unbelievable learning experience; in understanding challenges Cargill salespeople are facing in multiple geographies and businesses; helping others understand Cargill sales structure and adapting the guidelines to enhance their own talent was so rewarding.",
        "image": {
          "type": "image",
          "src": "assets/images/dark/Lisa Allen.png",
          "alt": "person"
        },
        "name": "Lisa Allen",
        "place": "National Sales Lead, Minneapolis"
      }



    ]
  }

  example_id = 0;
  example(id) {
    this.example_id = id;
  }
  visited = [0, 0, 0, 0, 0];
  activity_click(id) {
    this.activity2 = id;
    console.log(id);
    if (id == 2 && this.visited[id] == 0) {
      const items = document.querySelectorAll(".activity2_number");
      gsap.from(items, {
        textContent: 0,
        duration: 2,
        ease: Power1.easeIn,
        snap: { textContent: 1 },
        // stagger: 1,
        // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      });
    } else if (id == 4 && this.visited[id] == 0) {
      const items1 = document.querySelectorAll(".activity2_delivery");
      console.log(items1);
      gsap.from(items1, {
        textContent: 0,
        duration: 2,
        ease: Power1.easeIn,
        snap: { textContent: 0.5 },
        // stagger: 1,
        // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      });
    }


    this.visited[id] = 1;
  }
  activity2_2_data = [
    {
      title: "Projects",
      number: "50",
      image: "assets/images/dark/icon_1.png",
    },
    {
      title: "Translations",
      number: "25",
      image: "assets/images/dark/icon_2.png",
    },
    {
      title: "Pathways/Plans Developed",
      number: "100",
      image: "assets/images/dark/icon_3.png",
    },
    {
      title: "Articles",
      number: "90",
      image: "assets/images/dark/icon_4.png",
    },
    {
      title: "Videos",
      number: "150",
      image: "assets/images/dark/icon_5.png",
    },
    {
      title: "Courses",
      number: "180",
      image: "assets/images/dark/icon_6.png",
    },
    {
      title: "Responsive Design*",
      number: "300",
      image: "assets/images/dark/icon_7.png",
      desc: "*Responsive design enables user to have the best experience with content across devices and operating systems"
    },
    {
      title: "Curated Content Items",
      number: "400",
      image: "assets/images/dark/icon_8.png",
    }
  ]

  activity2_delivery = [
    {
      title: "Collaborative Learning Courses",
      number: "50",
      symbol: "+",
      image: "assets/images/icon1.png",
    },
    {
      title: "Enrolled Learners",
      number: "6000",
      symbol: "+",
      image: "assets/images/icon2.png",
    },
    {
      title: "Average Completion Rate",
      number: "70",
      symbol: "%",
      image: "assets/images/icon3.png",
    },
    {
      title: "Virtual Facilitators (Business & Function)",
      number: "300",
      symbol: "+",
      image: "assets/images/icon4.png",
    },
    {
      title: "Average Rating/Course (5-point scale)",
      number: "4.5",
      symbol: "",
      image: "assets/images/icon5.png",
    },
    {
      title: "Average Net Promoter Score",
      number: "57",
      symbol: "%",
      image: "assets/images/icon6.png",
    }
  ]
}

