import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';

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

  videoOptions: VideoOptions;
  url: string;

  constructor(private videoPlayer: VideoPlayer, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
  }

  async playMusic(){
    try {
      this.videoOptions = {
        volume: 1.0
      }
      this.url = "assets/sounds/asa-branca-facil.mp3"
      this.videoPlayer.play(this.url, this.videoOptions);
      console.log('got played')
    } catch (error) {
      console.error(error);
    }
  }

  choose(n){
    if (n == 1){
      console.log("Choosed 1")
    }
  }

}
