import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OneplayerPage } from './oneplayer';

@NgModule({
  declarations: [
    OneplayerPage,
  ],
  imports: [
    IonicPageModule.forChild(OneplayerPage),
  ],
})
export class OneplayerPageModule {}
