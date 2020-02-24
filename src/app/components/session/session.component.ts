import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  time: number;

  constructor(private clockService: ClockService) { 
    this.clockService.sessionLength$.subscribe(value =>{
      this.time = value;
    })
  }

  ngOnInit() {
    this.time = this.clockService.initSession();
  }

  onClick(value: number){
    if ((this.time+value)>0 && (this.time+value)<=50){
      this.clockService.setSession(value);
    }
  }
}
