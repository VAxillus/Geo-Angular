import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


let apiToken = environment.MAPBOX_API_KEY;
declare let omnivore: any;
declare let L: any;

const defaultCoords: number[] = [56.1612, 15.5869];
const defaultZoom: number = 13;

@Injectable()
export class MapService {
  map: any;

  constructor() {
  }


  plotMap(){
    this.map = L.map('map').setView(defaultCoords, defaultZoom);
    this.map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(this.map);

    this.map.on('click', function(ev) {
    alert(ev.latlng);
    });
  }

}
