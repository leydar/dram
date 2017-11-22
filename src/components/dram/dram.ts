import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'dram',
  templateUrl: 'dram.html'
})

export class DramComponent {
  @Input ('dram') dram;
  @Output () occurance = new EventEmitter();
  
  constructor(private actionSheetCtrl: ActionSheetController) { };

  vote(delta): void {
    this.dram.vote+=delta;
  };

  presentActionSheet(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Drams by the fist',
      buttons: [
        {
          text: 'Pot Still',
          role: 'destructive',
          handler: () => {
            console.log('Pot Still clicked');
          }
        },{
          text: 'Single Malt',
          handler: () => {
            console.log('Single Malt clicked');
          }
        },{
          text: 'Blend',
          handler: () => {
            console.log('Blend clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  };

  addImage(): void {
    console.log('camera click');
    this.occurance.emit("an occurance");
  };
}
