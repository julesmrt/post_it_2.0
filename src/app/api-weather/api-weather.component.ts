import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-weather',
  templateUrl: './api-weather.component.html',
  styleUrls: ['./api-weather.component.scss']
})

@Injectable()

export class ApiWeatherComponent implements OnInit {
weather_ncy;
icon_ncy

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  	this.weather_api();
  }

  weather_api() { //weatherbit.io
  	this.httpClient
  	.get<any>('https://api.weatherbit.io/v2.0/current?city=Nancy&key=07cfbeec7ca64f578b1cc6feae24b327')
  	.subscribe(
  		(get_weather) => {
  			console.log('get data from API');
  			this.weather_ncy = get_weather;
  			this.weather_ncy.data[0].weather.icon = this.icon_ncy;
        console.log(this.weather_ncy.data);
        console.log(this.weather_ncy.data[0].weather);
  		},
  		(error) => {
  			console.log('Erreur! :' + error)
  		}
  	);
  }
}