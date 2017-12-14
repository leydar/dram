import { NoteComponent, NoteAngle, Level } from './../../components/note/note';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as SVG from 'svg.js';

@IonicPage()
@Component({
  selector: 'page-wheel',
  templateUrl: 'wheel.html',
})
export class WheelPage {
  paper: any;
  fill: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fill = false;
  }

  segmentClick(event: Event):void {
    let _segment = SVG.get(event.srcElement.id);
        _segment.fill("url(#"+event.srcElement.getAttribute('type')+")")
                .opacity(0.2)
                .animate(2000, '>', 0).attr({opacity: 1});

    //console.log(event.srcElement.id, event.srcElement.getAttribute('type'));
    //event.srcElement.setAttribute("opacity", "1");
    
    /*let taste = SVG.get(id),
        _opacity = taste.opacity();

    taste.opacity((_opacity<1) ? _opacity+0.2 : 0.2);*/
    //taste.data("m 10,15 a 30,30 0 0 1 10, 15,751.02138 L 372.05521,526.04572 Z");
  }

  centreClick():void {
    let _segment = SVG.get("floral_2");
        _segment.animate(1500, '>', 100).rotate(360, 400, 300);
    
    //this.fill = !this.fill;
    //this.paper.rotate(200);

    /*let note_0: any = SVG.get('floral');
        note_0.rotate(270);

    let note_1: any = SVG.get('spicy');
        note_1.rotate(220);

    let note_2: any = SVG.get('roasted');
        note_2.rotate(270);*/

    //for (let i: number=0; i<8; i++){ };
    //taste.scale(1.5);
    
    //taste.data("m 10,15 a 30,30 0 0 1 10, 15,751.02138 L 372.05521,526.04572 Z");
  }

  initNotes():void {
    this.drawNotes();
    
    /*let startX: number = 0,
    startY: number = 0;

    for (let i: number=0; i<8; i++){
      let segment:any = SVG.get('note_'+i);

      if (segment) {
        segment.touchstart((event)=>{
          segment.opacity(1);
          startX = event.touches[0].screenX;
          startY = event.touches[0].screenY;
          //console.log(event);
        }).touchmove((event)=>{
          //console.log(event);
          //console.log(event.touches[0].screenX);
          let ratio = event.touches[0].screenX/startX;
          segment.scale(ratio, ratio, 400, 300);
          //console.log(ratio);
        });
      };
    };*/
  }

  drawNotes(): void{
    this.paper = SVG("paperTaste");
    //this.paper.clear();

    this.drawNote(36, 72, Level.outer, "vegetable");
    this.drawNote(72, 108, Level.outer, "wood");
    this.drawNote(108, 144, Level.outer, "spicy");
    this.drawNote(144, 180, Level.outer, "roasted");
    this.drawNote(180, 216, Level.outer, "winey");
    this.drawNote(216, 242, Level.outer, "off-notes");
    this.drawNote(242, 278, Level.outer, "taste");
    this.drawNote(278, 304, Level.outer, "floral");
    this.drawNote(304, 360, Level.outer, "fruity");

    this.drawNote(0, 6, Level.outer, "wheat");
    this.drawNote(6, 12, Level.outer, "barley");
    this.drawNote(12, 18, Level.outer, "oat");
    this.drawNote(18, 24, Level.outer, "corn");
    this.drawNote(24, 28, Level.outer, "rye");
      this.drawNote(0, 36, Level.centre, "cereal");
        this.drawNote(0, 24, Level.inner, "grain");
        this.drawNote(28, 36, Level.inner, "husk");

    this.drawNote(36, 72, Level.centre, "vegetable");
      this.drawNote(36, 46, Level.inner, "green");
      this.drawNote(46, 58, Level.inner, "vegetable");
      this.drawNote(58, 72, Level.inner, "earthy");
    this.drawNote(72, 108, Level.centre, "wood");
      this.drawNote(72, 108, Level.inner, "woody");
    this.drawNote(108, 144, Level.centre, "spicy");
      this.drawNote(108, 144, Level.inner, "spices");
    this.drawNote(144, 180, Level.centre, "roasted");
      this.drawNote(144, 156, Level.inner, "roasted_flavours");
      this.drawNote(156, 168, Level.inner, "malty");
      this.drawNote(168, 180, Level.inner, "nuts");
    this.drawNote(180, 216, Level.centre, "winey");
      this.drawNote(180, 200, Level.inner, "sweet_wine");
      this.drawNote(200, 216, Level.inner, "spirits");
    this.drawNote(216, 242, Level.centre, "off-notes");
      this.drawNote(216, 228, Level.inner, "microbiological");
      this.drawNote(228, 235, Level.inner, "technological");
      this.drawNote(235, 242, Level.inner, "chemical");
    this.drawNote(242, 278, Level.centre, "taste");
      this.drawNote(242, 260, Level.inner, "basic_taste");
      this.drawNote(260, 278, Level.inner, "trigeminal");
    this.drawNote(278, 304, Level.centre, "floral");
      this.drawNote(278, 304, Level.inner, "blossom");
    this.drawNote(304, 360, Level.centre, "fruity");
      this.drawNote(304, 310, Level.inner, "stone_fruit");
      this.drawNote(310, 320, Level.inner, "pip_fruit");
      this.drawNote(320, 330, Level.inner, "citrus");
      this.drawNote(330, 340, Level.inner, "exotic");
      this.drawNote(340, 360, Level.inner, "dried_fruit");
      
    this.drawCentre();
  }

  drawCentre(): void {
    this.paper.circle(40).fill("#ff6600").opacity(0.6).move(380,280).click(this.centreClick); //(this.centreClick)(this)
    
    /*function() {
      this.fill({ color: '#f06' });
      this.centreClick('tried');
    });*/
  }

  drawNote(start: number, end: number, noteLevel: number, type: string): any {
    let _angle: NoteAngle = { centre: {x: 400, y: 300}, start: start, end: end },
        _note: NoteComponent = new NoteComponent(_angle, noteLevel),
        _fill: string = (this.fill===true)?"url(#"+type+")":"white",
        _id: string = type+"_"+noteLevel;
    
        //console.log(type, this.fill, _fill); //0.8-(noteLevel/10)
        this.paper.path(_note.path).id(type+"_"+noteLevel).opacity(0.6).fill(_fill)
                  .attr({'type': type}).stroke("#ff9955").click(this.segmentClick);

        this.paper.text((add) => {
                    add.tspan(type.replace("_", " ")).dy(_note.text.verticalOffset)
                }).opacity(_note.text.opacity).stroke("black").path(_note.text.path)
                  .font(_note.text.font)
                  .textPath().attr('startOffset', _note.text.offset)
                  .click(this.segmentClick);
    
        let _segment = SVG.get(_id).addClass("attempted-class-structure");
        if (noteLevel === Level.centre) {
          _segment.animate(1500, '>', 300).rotate(360, 400, 300).attr({fill: "#c0c0c0"});
        } else {
          _segment.animate(1500, '>', 300).rotate(-360, 400, 300);
        };
        
        //segment.animate(2000, '>', 1000).attr({ fill: '#f03' });
        

        
    return this;
  }

  ionViewDidLoad() {
    this.initNotes();

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
