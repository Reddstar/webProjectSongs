import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayPage } from '../play/play';

/**
 * Generated class for the MusicSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-set',
  templateUrl: 'music-set.html',
})
export class MusicSetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicSetPage');
  }

  goToPlay(){
    this.navCtrl.push(PlayPage);
  }

}
