import { Component } from '@angular/core';

export enum NoteType {nose, taste, finish};
export interface Point {x: number, y: number};

export interface NoteAngle {
  centre: Point, //centre point of angle (not arc)
  side?: number, //radius
  start?: number, //segment start angle
  end: number //total angle from 0
};

export enum Level {inner, centre, outer};

@Component({
  selector: 'note',
  templateUrl: 'note.html'
})
export class NoteComponent {
  type: NoteType; //nose,taste,finish
  path: string; //path description curve
  text: {
    path: string,
    opacity: number,
    offset: string,
    verticalOffset: number,
    font: object
  }; //text path
  
  constructor(private angle: NoteAngle, private noteLevel: Level) {
    //add classes for level and flavour
    switch (noteLevel) {
      case Level.inner: angle.side = 140;
        break;
      case Level.centre: angle.side = 200;
        break;
      case Level.outer: angle.side = 390;
        break;
      default:
        break;
    };

    this.type = NoteType.taste;
    this.path = this.describeSegment(angle);
  }

  polarToCartesian(_angle: NoteAngle): Point {
    let _rad = _angle.end * Math.PI / 180;
    return {
      x: _angle.centre.x + (_angle.side * Math.cos(_rad)),
      y: _angle.centre.y + (_angle.side * Math.sin(_rad))
    };
  }
  
  describeSegment(_angle: NoteAngle): string {
      let start: Point = this.polarToCartesian({ centre: _angle.centre, side: _angle.side, end: _angle.start }),
          end: Point = this.polarToCartesian(_angle),
          centre: Point = this.polarToCartesian({ centre: _angle.centre, side: _angle.side,
                                                  end: ((_angle.end - _angle.start) / 2)+_angle.start });//2º offset to centre text
      
      let d = [
          "M", _angle.centre.x, _angle.centre.y,
          "L", start.x, start.y, 
          "A", _angle.side, _angle.side, 0, 0, 1, end.x, end.y,
          "z"
      ].join(" ");
  
      this.text = {font: {}, opacity: 0.8, verticalOffset: 0, path: "", offset: ""};

      switch (this.noteLevel) {
        case Level.inner:
          this.text.path = ["M", _angle.centre.x, _angle.centre.y, "L", centre.x, centre.y].join(" ");
          this.text.font = { size: "x-small", family: "Helvetica", anchor: "end" };
          this.text.offset = "95%";
          this.text.verticalOffset = 4;
          break;
        case Level.centre:
          this.text.path = ["M", start.x, start.y, "A", _angle.side, _angle.side, 0, 0, 1, end.x, end.y].join(" ");
          this.text.font = { anchor: "middle", size: "x-large" };
          this.text.offset = "50%";
          this.text.verticalOffset = 38;
          break;
        case Level.outer:
          this.text.path = ["M", _angle.centre.x, _angle.centre.y, "L", centre.x, centre.y].join(" ");
          this.text.font = { size: "medium", family: "Helvetica", anchor: "start" };
          this.text.offset = "70%";
          this.text.verticalOffset = 4;
        default:
          break;
      };
      return d;
  }
}
