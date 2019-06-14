import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map' ;


import { urlToNavGroupStrings } from 'ionic-angular/umd/navigation/url-serializer';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey='516b0c51a0ac1a1cc17f358df476bd1f';
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url ='openweathermap.org';
    }
    getWeather(city,state){
      // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=516b0c51a0ac1a1cc17f358df476bd1f
      return this.http.get('http://api.'+this.url+'/data/2.5/weather?q='+ city + ',' + state+ '&APPID='+ this.apiKey)
      .map(res =>res.json());
    }

}

