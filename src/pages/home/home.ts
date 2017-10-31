import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  drams = [];

  constructor(public actionSheetCtrl: ActionSheetController) {
    this.drams = [{distillery: 'Midleton',
                  name: 'Powers Aviation',
                  img: 'assets/imgs/lagavulin.jpg',
                  abv: 46,
                  volume: 700,
                  cask: 83785,
                  bonded: '2000-11-20',
                  masters: [{distiller: 'Brian Nation'},
                            {blender: 'Billy Leighton'},
                            {cooper: 'Ger Buckley'}],
                  nose: ['grassy', 'oily'],
                  palate: ['caramel', 'leather', 'spice'],
                  mouthfeel: ['oily', 'rich'],
                  finish: ['lingering', 'warm'],
                  notes: 'A remarkable dram. I wish I hadn\'t already finished the bottle'}
                 ];

    console.log(this.drams[0]);
  }

  addNewDram = function(drammage: number) {
    for (let i=0; i<drammage; i++) {
    this.drams.unshift({distillery: 'Midleton',
                     name: 'Redbreast '+this.drams.length,
                     img: 'assets/imgs/redbreast.png',
                     abv: 43,
                     volume: 700,
                     cask: 83785,
                     bonded: '2000-11-20',
                     masters: [{distiller: 'Brian Nation'},
                               {blender: 'Billy Leighton'},
                               {cooper: 'Ger Buckley'}],
                     nose: ['grassy', 'oily'],
                     palate: ['cream', 'apples', 'spice', 'leather'],
                     mouthfeel: ['oily', 'rich'],
                     finish: ['lingering', 'warm'],
                     notes: 'A remarkable dram. I wish I hadn\'t already finished the bottle'});
    }
  }

  presentActionSheet = function() {
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
  }
}
