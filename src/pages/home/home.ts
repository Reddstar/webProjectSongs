import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OneplayerPage} from '../oneplayer/oneplayer';
import { GametypePage } from '../gametype/gametype';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPlay(){
    this.navCtrl.push(GametypePage);
  }

}
