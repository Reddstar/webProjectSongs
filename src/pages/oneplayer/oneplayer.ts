import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { PlayPage } from '../play/play';
import { Infrastructure } from '../../app/infrastructure';
import { MusicSetPage } from '../music-set/music-set';
import { PlayTillEndPage } from '../play-till-end/play-till-end';

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
    this.showRules(Infrastructure.mode);
  }

  backScreen(){
    this.navCtrl.pop();
  }

  goForward(){
    if (Infrastructure.mode == 0){
      this.navCtrl.push(MusicSetPage);
    } else if (Infrastructure.mode == 1){
      Infrastructure.ldefined = false;
      this.navCtrl.push(PlayTillEndPage);
    }
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

  showRules(n){
    if (n == 0){
      let rules = this.alertCtrl.create({
        title: 'Sobre o modo: Um Jogador',
        message: '- Tente adivinhar uma série de Músicas e veja quantos pontos consegue!',
        buttons:[{
          text: 'Certo',
          handler: () => {
            console.log("Confirmed");
          }
        }]
      });
      rules.present();
    } else if (n == 1){
      let rules = this.alertCtrl.create({
        title: 'Sobre o modo: Até o fim',
        message: '- Tente adivinhar As músicas apresentadas, caso erre perderá vidas até não sobrar mais nenhuma!',
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

  setDifficult(n: number){
    this.difficult = n;
    Infrastructure.difficult = n;
  }


}
