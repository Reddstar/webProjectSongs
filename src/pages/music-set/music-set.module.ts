import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicSetPage } from './music-set';

@NgModule({
  declarations: [
    MusicSetPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicSetPage),
  ],
})
export class MusicSetPageModule {}
