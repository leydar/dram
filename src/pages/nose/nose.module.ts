import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NosePage } from './nose';

@NgModule({
  declarations: [
    NosePage,
  ],
  imports: [
    IonicPageModule.forChild(NosePage),
  ],
})
export class NosePageModule {}
