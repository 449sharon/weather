import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
 import{WeatherProvider} from '../../providers/weather/weather';
@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    WeatherProvider,
    IonicPageModule.forChild(SettingsPage),
  ],
})
export class SettingsPageModule {}
