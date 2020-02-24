import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  counter: number = 25;
  displayCounter: string = '25:00'

  constructor() { }

  ngOnInit() {
  }

}
