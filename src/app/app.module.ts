import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {VideoPlayer} from '@ionic-native/video-player'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StreamingMedia} from '@ionic-native/streaming-media';
import { OneplayerPage } from '../pages/oneplayer/oneplayer';
import { GametypePage } from '../pages/gametype/gametype';
import { PlayPage } from '../pages/play/play';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OneplayerPage,
    GametypePage,
    PlayPage
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
    PlayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    VideoPlayer
  ]
})
export class AppModule {}
