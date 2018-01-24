import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';
import {NativeAudio} from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular/platform/platform';
import {LoadingController} from 'ionic-angular';
import {Infrastructure} from '../../app/infrastructure';

import shuffle from '../../app/shuffle'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {

  url: string;
  imgUrl: string;
  index: number;
  randomizedIndexes : number[];

  public opt1 : string = "opt1";
  public opt2 : string = "opt2";
  public opt3 : string = "opt3";
  public opt4 : string = "opt4";

  constructor(public alertCtrl: AlertController, private infrastructure:  Infrastructure, public loading: LoadingController, private platform: Platform, private nativeAudio: NativeAudio, public navCtrl: NavController, public navParams: NavParams) {
    
    this.imgUrl = "assets/imgs/play-unclicked.png";
    
    this.index = this.randomInt(0,3);
    this.randomizedIndexes = [0,1,2,3];
    this.randomizedIndexes = shuffle( this.randomizedIndexes );
    console.log (this.randomizedIndexes);

    this.opt1 = this.infrastructure.songsOptions[this.randomizedIndexes[0]];
    this.opt2 = this.infrastructure.songsOptions[this.randomizedIndexes[1]];
    this.opt3 = this.infrastructure.songsOptions[this.randomizedIndexes[2]];
    this.opt4 = this.infrastructure.songsOptions[this.randomizedIndexes[3]];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
    let loader = this.loading.create({
      content: 'Se avexe não...'
    });
    loader.present().then(() => {
      this.platform.ready().then(() => {
        this.url = this.infrastructure.songsUrl[this.index]
        console.log(this.url)
        this.nativeAudio.preloadSimple(this.infrastructure.songs[this.index], this.url).then(null, null);
        loader.dismiss();
      });
    });
  }

  playMusic(){
    this.imgUrl = "assets/imgs/play-clicked.png";
    this.nativeAudio.play(this.infrastructure.songs[this.index]).then(null, null);
  }
  stopMusic(){
    this.imgUrl = "assets/imgs/play-unclicked.png";
    this.nativeAudio.stop(this.infrastructure.songs[this.index]);
  }

  backButtonAction(){
    this.stopMusic();
  }

  showRightResult(){
    let rules = this.alertCtrl.create({
      title: 'Resultado',
      message: 'Parabéns você acertou!!',
      buttons:[{
        text: 'Certo',
        handler: () => {
          console.log("Confirmed");
        }
      }]
    });
    rules.present();
  }

  showWrongResult(){
    let rules = this.alertCtrl.create({
      title: 'Resultado',
      message: 'Eita, você tem que treinar mais.',
      buttons:[{
        text: 'Certo',
        handler: () => {
          console.log("Confirmed");
        }
      }]
    });
    rules.present();
  }

  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  choose(n){
    this.stopMusic();
    if (n == 1){
      if (this.randomizedIndexes[0] == this.index){
        this.showRightResult();
      } else {
        this.showWrongResult();
      }
    } else if (n == 2){
      if (this.randomizedIndexes[1] == this.index){
        this.showRightResult();
      } else {
        this.showWrongResult();
      }
    } else if (n == 3){
      if (this.randomizedIndexes[2] == this.index){
        this.showRightResult();
      } else {
        this.showWrongResult();
      }
    } else if (n == 4){
      if (this.randomizedIndexes[3] == this.index){
        this.showRightResult();
      } else {
        this.showWrongResult();
      }
    }
  }

}
