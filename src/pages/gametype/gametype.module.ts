import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GametypePage } from './gametype';

@NgModule({
  declarations: [
    GametypePage,
  ],
  imports: [
    IonicPageModule.forChild(GametypePage),
  ],
})
export class GametypePageModule {}
