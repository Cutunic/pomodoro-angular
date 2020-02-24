import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  counter: number;

  constructor(private clockService: ClockService) { 
    this.clockService.displayTime$.subscribe(value=>{
      this.counter = value;
    })
  }

  ngOnInit() {
    this.counter = this.clockService.displayTime;
  }

}
