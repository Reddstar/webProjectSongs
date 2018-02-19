import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { PlayPage } from '../play/play';
import { Infrastructure } from '../../app/infrastructure';

@IonicPage()
@Component({
  selector: 'page-oneplayer',
  templateUrl: 'oneplayer.html',
})
export class OneplayerPage {

  difficult: number;

  constructor(public infrastructure: Infrastructure, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OneplayerPage');
    this.showRules();
  }

  backScreen(){
    this.navCtrl.pop();
  }

  goForward(){
    this.infrastructure.changeDifficult(this.difficult);
    this.navCtrl.push(PlayPage)
  }

  showDescription(selectedTitle, description){
    let dialog = this.alertCtrl.create({
      title: selectedTitle,
      message: description,
      buttons:[{
        text: 'Certo',
        handler: () => {
          console.log("Confirmed");
        }
      }]
    });
    dialog.present();
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

  setDifficult(n: number){
    this.difficult = n;
  }


}
