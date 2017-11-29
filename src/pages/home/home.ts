import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OneplayerPage} from '../oneplayer/oneplayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToOnePlayer(){
    this.navCtrl.push(OneplayerPage);
  }

}
