import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OneplayerPage} from '../oneplayer/oneplayer';

/**
 * Generated class for the GametypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gametype',
  templateUrl: 'gametype.html',
})
export class GametypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GametypePage');
  }

  goToOnePlayer(){
    this.navCtrl.push(OneplayerPage);
  }

  goBackMain(){
    this.navCtrl.pop();
  }

}
