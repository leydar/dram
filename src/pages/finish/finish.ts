import { Point } from './../../components/note/note';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import * as SVG from "svg.js";
import * as d3 from "d3";

@IonicPage()
@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const anchors: any = d3.selectAll(".anchor"), //circles to extend map
          voronoi = d3.voronoi(), //voronoi hit zones
          data: [number, number][] = [], //data in coordinate format
          noteList = {}, //dictionary/hashmap
          lineGenerator = d3.line();

    //get data from firestore and loop
    data.push([371.97186, 457.20047]);
    noteList['toffee'] = 0;
    data.push([401.01376, 458.33691]);
    noteList['woody'] = 1;
    data.push([415.66098, 482.8331]);
    noteList['tannic'] = 2;
    data.push([436.74789, 495.33374]);
    noteList['char'] = 3;
    data.push([444.95538, 526.14337]);
    noteList['sweet'] = 4;
    data.push([423.36337, 546.72522]);
    noteList['grainy'] = 5;
    data.push([416.16605, 570.08502]);
    noteList['vanilla'] = 6;
    data.push([395.33167, 581.82806]);
    noteList['corny'] = 7;
    data.push([371.84561, 583.21698]);
    noteList['buttery'] = 8;
    data.push([350.2536, 578.03998]);
    noteList['heat'] = 9;
    data.push([338.38431, 559.98352]);
    noteList['dark_fruit'] = 10;
    data.push([321.96933, 549.37689]);
    noteList['citrus_fruit'] = 11;
    data.push([330.30307, 526.14337]);
    noteList['floral'] = 12;
    data.push([320.70663, 505.30899]);
    noteList['spicy'] = 13;
    data.push([326.00992, 479.92892]);
    noteList['herbal'] = 14;
    data.push([346.97061, 465.78677]);
    noteList['malty'] = 15;
    data.push([371.97186, 457.20047]);
    
    voronoi.extent([[-1, -1], [800, 1000]]);

    let finishLine = d3.select('g#finish')
                        .append('path')
                        .attr('d', lineGenerator(data))
                        .attr('id', 'finishline')
                        .style('stroke', 'black')
                        .style('opacity', 0.6)
                        .style('fill', 'blue')
                        .lower();

    let polygons = voronoi.polygons(data);

    console.log(polygons);

    polygons.forEach((d, i)=>{
      console.log(i, d);
      if (i%2===0){
        
      };
    });

    // function mouseMoveHandler() {
    //   // get the current mouse position
    //   const [mx, my] = d3.mouse(this);

    //   //const voronoiPoly : d3.VoronoiPolygon<number> = [32,32];

    //   // use the new diagram.find() function to find the Voronoi site
    //   // closest to the mouse, limited by max distance voronoiRadius
      // const site = polygons.find(32, 15);
    // }

    let dragstart = function(){
      let anchor = d3.select(this);
      anchor.attr('data', '{"startx": '+anchor.attr('cx')+', "starty": '+anchor.attr('cy')+'}')
            .classed('dragging', true)
            .transition()
            .duration(300)
            .ease(d3.easeLinear)
              .attr('r', '50');
      finishLine.transition()
                .duration(400)
                .ease(d3.easeLinear)
                  .style('fill', anchor.style('fill'))
    },
    dragmove = function(d){
      let anchor: any = d3.select(this),
          coords: Point = {x: d3.event.x, y: d3.event.y},
          index: number = noteList[anchor.attr('id')];

      anchor.attr('cx', coords.x)
            .attr('cy', coords.y);
      
      if (index === 0) { //close polygon
        data[data.length-1] = [coords.x, coords.y];  
      };

      data[index] = [coords.x, coords.y];
      finishLine.attr('d', lineGenerator(data));

    },
    dragend = function(){
      let anchor = d3.select(this);
      anchor.classed('dragging', false)
            .transition()
            .duration(500)
            .ease(d3.easeBounce)
              .attr('r', '10');

      polygons = voronoi.polygons(data);
      // try {
      //   d3.select('g#finish')
      //   .append('path')
      //   .attr('d', lineGenerator(polygons.edges))
      //   .attr('opacity', 0.6)
      //   .style('stroke', anchor.style('fill'))
      //   .lower();
      // } catch (error) {
      //   console.log(error);
      // };

      for (let i=0; i<polygons.length; i++) {
        try {
          d3.select('g#finish')
          .append('path')
          .attr('d', lineGenerator(polygons[i]))
          .attr('opacity', 0.6)
          .style('stroke', anchor.style('fill'))
          .lower();
        } catch (error) {
          console.log(i, polygons[i], error);
        };
      };
    };
    
    anchors.call(d3.drag().on("start", dragstart)
                          .on("drag", dragmove)
                          .on("end", dragend));

  }
}
