import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-click',
  templateUrl: './flip-click.component.html',
  styleUrls: ['./flip-click.component.scss']
})
export class FlipClickComponent implements OnInit {
  selected = -1;
  cards = [
    {
      title: "SPEED",
      img: "assets/images/dark/icon5_1.png",
      desc: `
      <ul>
        <li>Connecting employees to learning to build critical skills faster</li>
        <li>Decreasing time to design and develop learning</li>
        <li>Decreasing time to respond to business learning needs</li>
      </ul>`
    },
    {
      title: "ACCESSIBILITY",
      img: "assets/images/dark/icon5_2.png",
      desc: `
      <ul>
        <li>Delivering learning seamlessly regardless of device, on/off network, on the employee’s time, wherever they are</li>
      </ul>
      `
    },
    {
      title: "EFFECTIVENESS",
      img: "assets/images/dark/icon5_3.png",
      desc: `
      <ul>
        <li>Learning content designs and experiences that the employee views as relevant and contributing to the success in their role</li>
        </ul>`
    },
    {
      title: "SCALE",
      img: "assets/images/dark/icon5_4.png",
      desc: `
      <ul>
        <li>Enabling learning at scale…reach more learners faster</li>
        <li>Increasing the capacity to serve our employee population</li>
        </ul>`
    },
    {
      title: "ENGAGEMENT",
      img: "assets/images/dark/icon5_5.png",
      desc: `
      <ul>
        <li>Learners make a psychological investment in the learning </li>
        <li>They try hard to learn, retain more information and ultimately improve their performance</li>
        </ul>`
    },
    {
      title: "EFFICIENCY",
      img: "assets/images/dark/icon5_6.png",
      desc: `
      <ul>
        <li>Achieving all of the previous impact measures in the most cost effective manner</li>
        </ul>`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
