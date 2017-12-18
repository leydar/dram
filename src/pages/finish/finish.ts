import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as SVG from "svg.js";

@IonicPage()
@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let paper = SVG('paper_finish');
    var rect = paper.rect(50, 50);
    
    //rect.animate().rotate(45).move(50,50);
    rect.touchmove((event)=>{
      //let bBox = rect.bbox();

      let _svgX = event.touches[0].clientX,
          _svgY = event.touches[0].clientY;
      let _path = ["M 10,10 L",_svgX,_svgY].join(' ');

      paper.path(_path).stroke("#000").opacity(0.25);
      rect.move( event.touches[0].pageX, event.touches[0].pageY );
    });

    // let anchor: any = SVG.get('anchor_toffee'),
    //     ratioX: number = 700/screen.width,
    //     ratioY: number = 1100/screen.height;
    //     // edges: any = SVG.get('finish');

    // if (anchor) {
    //   anchor.touchmove((event)=>{
    //     let _svgX = event.touches[0].clientX,
    //         _svgY = event.touches[0].clientY+80;
    //     let _path: string = ["M 400,300 L",_svgX,_svgY].join(' ');
    //     paper.path(_path).stroke("#000").opacity(0.25);
    //     // anchor.move(event.touches[0].clientX, event.touches[0].clientY);
    //     anchor.move(_svgX, _svgY);
    //   });
    // };
  }
}
