import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { fromEvent,Subscription, Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'timer1';
  sec:Observable<number>=timer(0,1000);;
  min:Observable<number>=timer(0,60000);
  hour:Observable<number>=timer(0,3600000);
  secs:number;
  minutes:number;
  houres:number;
  aSub1:Subscription;
  aSub2:Subscription;
  aSub3:Subscription;
  

  constructor(){
    
  }

  ngOnInit(){
    
  }

  
  

  startTimer() {
    this.aSub1=this.sec.subscribe(e=>this.secs=e);
     this.aSub2=this.min.subscribe(e=>this.minutes=e);
     this.aSub3=this.hour.subscribe(e=>this.houres=e);
  }

  pauseTimer() {
    if(this.aSub1 && this.aSub2 && this.aSub3){
      this.aSub1.unsubscribe();
      this.aSub2.unsubscribe();
      this.aSub3.unsubscribe();
    }};
  
  resetTimer(){
    if(this.aSub1 && this.aSub2 && this.aSub3){
      this.aSub1.unsubscribe();
      this.aSub2.unsubscribe();
      this.aSub3.unsubscribe();
      this.secs=0;
      this.minutes=0;
      this.houres=0;
    }
  }

  ngDoCheck(){
    if(this.secs>=60){
      this.secs=0;
      this.aSub1.unsubscribe();
      this.aSub1=this.sec.subscribe(e=>this.secs=e);
    }
    else if(this.minutes>=60){
      this.minutes=0;
      this.aSub2.unsubscribe();
      this.aSub2=this.min.subscribe(e=>this.minutes=e);
    }
   
  }
}
