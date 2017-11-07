import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Dram {
  id?: string;
  brand: string;
  img?: string;
  volume?: number;
  cask?: number; //first fill, sherry, oak  
  bonded?: string;
  masters?: any;
  mouthfeel?: any;
  notes?: string;
  distiller?:string;
  blender?: string;
  company?: string; //bottler, bonder, distillery
  style?: string;
  region?: string;
  abv?: number;
  age?: number;
  created?: string;
  edition?: string;
  finish?: any;
  nose?: any;
  palate?: any;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    dramsCol: AngularFirestoreCollection<Dram>;
    drams: Observable<Dram[]>;
    snapshot: any = [];

  constructor(private afs: AngularFirestore, 
                public actionSheetCtrl: ActionSheetController) {
      
  };

  ngOnInit() {
    //executes when the component loads
    this.dramsCol = this.afs.collection('drams', ref => {
      return ref.orderBy('brand');
    });

    //this.drams = this.dramsCol.valueChanges();
    this.dramsCol.snapshotChanges()
                        .subscribe(actions => {
                          console.log(actions);

                          return actions.map(snap => {
                            let id = snap.payload.doc.id;
                            let data = { id, ...snap.payload.doc.data() };

                            this.snapshot.push(data);
                            return data;
                          });
                        });
    
    console.log(this.snapshot);
    //this.initDrams();
  }

  trackByDrams(index: number, dram: Dram): string { return dram.brand; }
  
  initDrams(): void {
    this.drams.forEach(element => {
      for(let i=0; i<element.length; i++) {
        console.log(element[i]);
      }
    });
  }

  addNewDram(drammage: number): void {
    /*for (let i=0; i<drammage; i++) {
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
    }*/
  }

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
  }
}
