import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`.activeIndex{
background-color: yellow;
}
.passiveIndex{
background-color:seagreen;
}`]
})
export class HomePage {

  @ViewChild('newAdSlider') slider: Slides;
  public currentIndex;

  constructor(public navCtrl: NavController) {

  }
  onSlideChanged() {
    try {
      this.currentIndex = this.slider.getActiveIndex();
      console.log("Current index is", this.currentIndex);
    } catch (e) {
      console.log("onSlideChanged ex", e)
    }
  }

  ngAfterViewInit() {
    this.slider.freeMode = true;
  }

}
