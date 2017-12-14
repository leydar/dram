import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as SVG from "svg.js";
/**
 * Generated class for the FinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let paper = SVG('paperFinish');//.size(800, 600);

    //let image = paper.svg('assets/imgs/fruity.jpg');
    let SVGFile="assets/imgs/fruity.jpg";
    let loadXML = new XMLHttpRequest;

    loadXML.onload = callback;
    loadXML.open("GET", SVGFile, true);
    loadXML.send();

    function callback()
    {
        var svgFileString=loadXML.responseText;
        paper.svg(svgFileString);
    }
  }
}
