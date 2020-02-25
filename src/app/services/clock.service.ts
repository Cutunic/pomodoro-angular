import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  pauseState: boolean = true;
  turn: boolean = true;

  sessionLength: number = 25;
  private sessionLength_ = new Subject<number>();
  public sessionLength$ = this.sessionLength_.asObservable();

  breakLength: number = 5;
  private breakLength_ = new Subject<number>();
  public breakLength$ = this.breakLength_.asObservable();

  sessionSeconds: number;
  breakSeconds: number;

  displayTime: number;
  private displayTime_ = new Subject<number>();
  public displayTime$ = this.displayTime_.asObservable();

  constructor() { 
    this.sessionLength_.next(this.sessionLength);
    this.breakLength_.next(this.breakLength);
    this.sessionSeconds = this.sessionLength * 60;
    this.breakSeconds = this.breakLength * 60;
    this.displayTime = this.sessionSeconds;
  }

  initSession(){
    return this.sessionLength;
  }
  setSession(value: number){
    this.sessionLength = this.sessionLength + value;
    this.sessionLength_.next(this.sessionLength);
    this.sessionSeconds = this.sessionLength * 60;
    this.displayTime = this.sessionSeconds;
    this.pauseState = true;
  }
  initBreak(){
    return this.breakLength;
  }
  setBreak(value: number){
    this.breakLength = this.breakLength + value;
    this.breakLength_.next(this.breakLength);
    this.breakSeconds = this.breakLength * 60;
    this.pauseState = true;
  }
  onPlay(){
    this.pauseState = false;
  }
  onPause(){
    this.pauseState = true;
  }
  onReset(){
    this.pauseState = true;
    this.sessionLength = 25;
    this.breakLength = 5;
    this.sessionSeconds = this.sessionLength * 60;
    this.displayTime = this.sessionSeconds;
    this.displayTime_.next(this.displayTime);

    this.setSession(0);
    this.setBreak(0);
  }

  sec = interval(1000).subscribe(value=>{
    if (this.pauseState===false){

      this.displayTime--;
      this.displayTime_.next(this.displayTime);
      console.log(this.displayTime);
      
      if (this.displayTime === 5){
        this.playAlarm();
        console.log('play Alarm');
      }
      if (this.displayTime===0){
        this.turn = !this.turn;
        if (this.turn===true){
          this.displayTime = this.sessionSeconds;
        } else {
          this.displayTime = this.breakSeconds;
        }
      }
    }
  })
  playAlarm(){
    let alarm = new Audio();
    alarm.src = "assets/alarm.mp3";
    alarm.load;
    alarm.volume = 1;
    alarm.play;
  }
}
