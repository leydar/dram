import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';//AngularFirestoreDocument

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
  vote?: number;
}

interface Action {
  id: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    dramsCol: AngularFirestoreCollection<Dram>;
    drams: Observable<Action[]>;
    
  constructor(private afs: AngularFirestore) {
      
  };

  ngOnInit() {
    //executes when the component loads
    this.dramsCol = this.afs.collection('drams', ref => {
      return ref.orderBy('brand');
    });

    this.drams=this.dramsCol.snapshotChanges()
    .map(actions => {
      return actions.map(snap => {
        let id = snap.payload.doc.id;
        let data = { id, ...snap.payload.doc.data() };
        return data;
      })
    });

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

  componentEvent(item: any): void {
    console.log('drammage\'s done', item);
  }
}
