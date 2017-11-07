import { Component } from '@angular/core';

/**
 * Generated class for the DramComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dram',
  templateUrl: 'dram.html'
})
export class DramComponent {

  text: string;

  constructor() {
    this.text = 'whiskey component';
  }

}
