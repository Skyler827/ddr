import { Component, OnInit, HostListener } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  noticeText: String = "";
  flyingArrows: Array<String> = [];
  
  // indicators:
  leftIndicator:Boolean = false;
  upIndicator:Boolean = false;
  downIndicator:Boolean = false;
  rightIndicator:Boolean = false;
  
  //flying arrows:
  leftArrows: Array<Number> = [1]
  rightArrows: Array<Number> = [1]
  constructor() { }
  ngOnInit() {
  }
  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowLeft":  this.leftIndicator = true; break;
      case "ArrowUp":    this.upIndicator = true; break;
      case "ArrowDown":  this.downIndicator = true; break;
      case "ArrowRight": this.rightIndicator = true; break;
    }
  }
  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowLeft": this.leftIndicator = false; break;
      case "ArrowUp": this.upIndicator = false; break;
      case "ArrowDown": this.downIndicator = false;  break;
      case "ArrowRight": this.rightIndicator = false; break;
    }
  }
  newArrow() {
    console.log("newArrow");
  }

}
