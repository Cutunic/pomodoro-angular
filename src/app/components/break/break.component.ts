import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {
  time: number;

  constructor(private clockService: ClockService) {
    this.clockService.breakLength$.subscribe(value=>{
      this.time = value;
    })
  }

  ngOnInit() {
    this.time = this.clockService.initBreak();
  }

  onClick(value: number){
    if ((this.time + value) > 0 &&(this.time + value)<=30){
      this.clockService.setBreak(value);
    }
  }
}
