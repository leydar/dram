import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheelPage } from './wheel';

@NgModule({
  declarations: [
    WheelPage,
  ],
  imports: [
    IonicPageModule.forChild(WheelPage),
  ],
})
export class WheelPageModule {}
