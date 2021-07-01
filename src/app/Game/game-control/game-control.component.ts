import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  currentNumber = 0;
  intervalVar;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.intervalVar = setInterval(()=>{this.currentNumber++;}, 1000)
  }

  onStopGame(){
    clearInterval(this.intervalVar)
  }

}
