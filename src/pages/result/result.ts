import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Infrastructure } from '../../app/infrastructure';
import shuffle from '../../app/shuffle';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  public n: string;
  public tip: string;
  public source: string;

  constructor(public infrastructure: Infrastructure, public navCtrl: NavController, public navParams: NavParams) {

    this.n = Infrastructure.score.toString();
    this.tip = shuffle(infrastructure.tips)[0];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
