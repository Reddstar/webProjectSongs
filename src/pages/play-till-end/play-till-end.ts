import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform } from 'ionic-angular';
import { Infrastructure } from '../../app/infrastructure';
import { NativeAudio } from '@ionic-native/native-audio';
import shuffle from '../../app/shuffle';
import { PlayPage } from '../play/play';
import { ResultPage } from '../result/result';

/**
 * Generated class for the PlayTillEndPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-till-end',
  templateUrl: 'play-till-end.html',
})
export class PlayTillEndPage {

  difficult: number;
  url: string;
  imgUrl: string;
  livesUrl: string;
  index: number;
  decoy: string[];
  randomizedIndexes : number[];
  personalSongs: string[];

  livesImageUrls: string[];

  public opt1 : string = "opt1";
  public opt2 : string = "opt2";
  public opt3 : string = "opt3";
  public opt4 : string = "opt4";

  constructor(public infrastructure: Infrastructure, public alertCtrl: AlertController, public loading: LoadingController, private platform: Platform, private nativeAudio: NativeAudio, public navCtrl: NavController, public navParams: NavParams) {

    infrastructure.changeDifficult();
    if (!Infrastructure.ldefined){
      Infrastructure.ldefined = true;
    }

    this.livesImageUrls = [
      'assets/imgs/lives-1.png',
      'assets/imgs/lives-2.png',
      'assets/imgs/lives-3.png'
    ]

    console.log(Infrastructure.lives);

    this.livesUrl = this.livesImageUrls[Infrastructure.lives - 1];
    
    platform.registerBackButtonAction(() => {
      this.stopMusic();
      this.navCtrl.pop();
    }, 1);

    console.log(this.difficult);

    this.decoy = shuffle(infrastructure.decoySongs);
    
    this.imgUrl = "assets/imgs/play-unclicked.png";

    this.index = this.randomInt(0,3);
    while (Infrastructure.indexes.indexOf(this.index) != -1){
      this.index = this.randomInt(0,3);
      if (Infrastructure.indexes.indexOf(-1) == -1){
        Infrastructure.indexes = [-1,-1,-1,-1];
      }
    }

    Infrastructure.indexes[Infrastructure.indexes.indexOf(-1)] = this.index;

    this.randomizedIndexes = [0,1,2,3];
    this.randomizedIndexes = shuffle( this.randomizedIndexes );
    console.log (this.randomizedIndexes);

    if (this.randomizedIndexes[0] == this.index){
      this.opt1 = this.infrastructure.songsOptions[this.randomizedIndexes[0]];
    } else {
      this.opt1 = this.decoy[0];
    }
    if (this.randomizedIndexes[1] == this.index){
      this.opt2 = this.infrastructure.songsOptions[this.randomizedIndexes[1]];
    } else {
      this.opt2 = this.decoy[1];
    }
    if (this.randomizedIndexes[2] == this.index){
      this.opt3 = this.infrastructure.songsOptions[this.randomizedIndexes[2]];
    } else {
      this.opt3 = this.decoy[2];
    }
    if (this.randomizedIndexes[3] == this.index){
      this.opt4 = this.infrastructure.songsOptions[this.randomizedIndexes[3]];
    } else {
      this.opt4 = this.decoy[3];
    }
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

  showRightResult(){
    let rules = this.alertCtrl.create({
      title: 'Resultado',
      message: 'Parabéns você acertou!!',
      buttons:[{
        text: 'Certo',
        handler: () => {
          Infrastructure.score = Infrastructure.score + 1;
          if (Infrastructure.lives > 0){
            this.navCtrl.push(PlayTillEndPage).then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(index - 1, 1);
            });
          } else {
            this.navCtrl.push(ResultPage).then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(index - 1, 1);
            });
          }
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
          Infrastructure.lives = Infrastructure.lives - 1;
          console.log(Infrastructure.lives);
          if (Infrastructure.lives > 0){
            this.navCtrl.push(PlayTillEndPage).then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(index - 1, 1);
            });
          } else {
            this.navCtrl.push(ResultPage).then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(index - 1, 1);
            });
          }
        }
      }]
    });
    rules.present();
  }

  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setDifficult(n){
    this.difficult = n;
  }

  choose(n){
    this.stopMusic();
    Infrastructure.times += 1;
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
