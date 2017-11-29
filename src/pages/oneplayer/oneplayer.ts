import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-oneplayer',
  templateUrl: 'oneplayer.html',
})
export class OneplayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OneplayerPage');
    this.showRules();
  }

  showRules(){
    let rules = this.alertCtrl.create({
      title: 'Sobre o modo: Um Jogador',
      message: '- Responda qual é a musica antes do tempo acabar<br>- A cada nível você tem menos tempo',
      buttons:[{
        text: 'Certo',
        handler: () => {
          console.log("Confirmed");
        }
      }]
    });
    rules.present();
  }

}
