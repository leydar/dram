import { Component } from '@angular/core';

import { WheelPage } from '../wheel/wheel';
import { NosePage } from '../nose/nose';
import { FinishPage } from '../finish/finish';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = NosePage;
  tab1Root = WheelPage;
  tab2Root = HomePage;
  tab3Root = FinishPage;

  constructor() {

  }
}
