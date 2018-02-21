import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {NativeAudio} from "@ionic-native/native-audio";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StreamingMedia} from '@ionic-native/streaming-media';
import { OneplayerPage } from '../pages/oneplayer/oneplayer';
import { GametypePage } from '../pages/gametype/gametype';
import { PlayPage } from '../pages/play/play';
import { Infrastructure } from './infrastructure';
import { ResultPage } from '../pages/result/result';
import { MusicSetPage } from '../pages/music-set/music-set';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OneplayerPage,
    GametypePage,
    PlayPage,
    ResultPage,
    MusicSetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OneplayerPage,
    GametypePage,
    PlayPage,
    ResultPage,
    MusicSetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    NativeAudio,
    Infrastructure
  ]
})
export class AppModule {}
