import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as SVG from 'svg.js';

/**
 * Generated class for the WheelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wheel',
  templateUrl: 'wheel.html',
})
export class WheelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //let wheel = SVG('svg');
    //let element = wheel.get(0);
    let segment = document.getElementById("taste_0");
    let taste = SVG.adopt(segment);
    taste.fill('#0000ff');
    //console.log(wheel);
    //console.log(element);
    console.log(segment);
    //let draw = document.getElementById("svg");

    //draw.addEventListener("load",function() {
      //let wheel = SVG('svg');
      //let element = SVG.adopt(document.getElementById('taste_0'));
      //let element = SVG('taste_0');
      
      //console.log(document.getElementById('taste_1'));
      //console.log(wheel, draw);
      //console.log(element);
      //console.log(wheel.get(0).id(), wheel.get(0));
 
      //console.log(draw.getElementsByClassName("segment"));
      //console.log(draw.children[0]);
    //}, false);
   

    /*draw.each(function(i, children) {
      console.log(i, this, children);
      this.fill({ color: '#f06' })
    });*/

    /*var circle = draw.circle(100).attr({fill: '#f00'});
    circle.click(function() {
      console.log('circle click');
      this.fill({ color: '#f06' });
    });*/
  }
}
