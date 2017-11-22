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

  segmentClick(i: number):void {
    console.log(i+' logged');
    let taste = SVG.get("segment_"+i);
    taste.fill(taste.attr('stroke')).opacity(0.8);
    taste.scale(1.5);
    
    //taste.data("m 10,15 a 30,30 0 0 1 10, 15,751.02138 L 372.05521,526.04572 Z");
  }

  ionViewDidLoad() {
    let startX = 0;
    for (let i=0; i<8; i++){
      let segment = SVG.get('segment_'+i);
      segment.touchstart((event)=>{
        startX = event.touches[0].screenX;
        //console.log(event);
      }).touchmove((event)=>{
        //console.log(event);
        //console.log(event.touches[0].screenX);
        let ratio = event.touches[0].screenX/startX
        segment.scale(ratio);
        console.log(ratio);
      });
    };

/*    let segment = SVG.get('taste_0');
    //segment.scale(-1, 1);
    segment.fill('#ff0000');
    segment.rotate(65,372.05521,526.04572);

    let segment_1 = SVG.get('taste_1');
    segment_1.fill('#0000ff');0
*/
    //segment.transform(rotate: 65);
    //let wheel = SVG('svg');
    //let element = wheel.get(0);
    //let segment = document.getElementById("taste_0");
    //let taste = SVG.adopt(segment);

    //let element = SVG.get("taste_0");
    //console.log(element);
    
    //let taste = SVG.get("taste_0");
    //taste.fill('#a1cd34');
    //console.log(wheel);
    //console.log(element);
    //console.log(taste);
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
