import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {OneplayerPage} from '../oneplayer/oneplayer';
import { GametypePage } from '../gametype/gametype';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  goToPlay(){
    this.navCtrl.push(GametypePage);
  }

  goToAbout(){
    this.navCtrl.push(AboutPage);
  }

  showInDevelopment(){
    let rules = this.alertCtrl.create({
      title: 'Desculpe =(',
      message: 'Essa funcionalidade estará disponível em breve!',
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
