import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';
@Component({
  selector: 'app-mouse-scroll',
  templateUrl: './mouse-scroll.component.html',
  styleUrls: ['./mouse-scroll.component.scss']
})
export class MouseScrollComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
