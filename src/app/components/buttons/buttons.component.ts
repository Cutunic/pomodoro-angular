import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock.service';

import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  faPlay = faPlay;
  faPause = faPause;
  faSyncAlt = faSyncAlt;

  constructor(private clockService: ClockService) {}
  ngOnInit() {}

  onPlay(){
    this.clockService.onPlay();
  }
  onPause(){
    this.clockService.onPause();
  }
  onRefresh(){
    this.clockService.onReset();
  }
}
