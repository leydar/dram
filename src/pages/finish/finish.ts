import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import * as SVG from "svg.js";
import * as d3 from "d3";

interface Datum {
    x: number; 
    y: number
};

@IonicPage()
@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let paper = d3.select("paper_finish");
    console.log(paper);
        /*width = paper.attr("width"),
        height = paper.attr("height"),
        radius = 10;*/

    let anchors: any = d3.selectAll(".anchor");
    //let testDatum: Datum = {x: 23, y: 45};
    //console.log(testDatum);

    var voronoi = d3.voronoi()
                    .x((d) => { return d[0]; })
                    .y((d) => { return d[1]; })
                    .extent([[-1, -1], [600, 600]]);
    console.log(voronoi);

    var dragstart = function(){
      let anchor = d3.select(this);
      anchor.attr('data', '{"startx": '+anchor.attr('cx')+', "starty": '+anchor.attr('cy')+'}')
            .attr('r', '25')
            .classed('dragging', true);
        //anchor.data = ()=>{ return {'startx': 23}};
      console.log(anchor);

    };
    var dragmove = function(d){
      let anchor = d3.select(this);
      //console.log(d3.event);
      //console.log(d3.event.x);
      anchor.attr('cx', d3.event.x)
            .attr('cy', d3.event.y);

      //anchor.attr('cx', d3.event.x).attr('cy', d3.event.y);

      //anchor.raise().attr("cx", d3.event.x).attr("cy", d3.event.y);
      //console.log('move', this);
    };
    var dragend = function(){
      let anchor = d3.select(this);
      anchor.classed('dragging', false)
            .attr('r', '10');
      console.log(JSON.parse (anchor.attr('data')));
      console.log('end', anchor);
    };
    
    anchors.call(d3.drag().on("start", dragstart)
                         .on("drag", dragmove)
                         .on("end", dragend));

    /*anchors.on('click', function() {
      console.log(this);
    });

    anchors.each(function(){
      let anchor = d3.select(this);
      anchor.style('fill', 'steelblue');
      anchor.call(d3.drag());

      //d3.select(this).style('fill', 'steelblue');
    });*/

      //anchors._groups[0][i].style("fill", "steelblue");
      //anchors._groups[0][i].call(d3.drag());
      //d3.drag(anchors[i]);
    
    // var paper = SVG('paper');
    // var rect = paper.rect(100, 100);
    
    // //rect.animate().rotate(45).move(50,50);
    // rect.touchmove((event)=>{
    //   let _svgX = event.touches[0].clientX,
    //       _svgY = event.touches[0].clientY;
    //   let _path = ["M 10,10 L",_svgX,_svgY].join(' ');
    //   paper.path(_path).stroke("#000").opacity(0.25);
    //   rect.move(_svgX, _svgY);
    // });

    // let paper = SVG('paper_finish');
    // var rect = paper.rect(50, 50);
    
    // //rect.animate().rotate(45).move(50,50);
    // rect.touchmove((event)=>{
    //   //let bBox = rect.bbox();

    //   let _svgX = event.touches[0].clientX,
    //       _svgY = event.touches[0].clientY;
    //   let _path = ["M 10,10 L",_svgX,_svgY].join(' ');

    //   paper.path(_path).stroke("#000").opacity(0.25);
    //   rect.move( event.touches[0].pageX, event.touches[0].pageY );
    // });

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
