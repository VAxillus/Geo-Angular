import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  commercials: Commercial[]

  constructor(private mapService: MapService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCommercials().subscribe((commercials) => {
      this.commercials = commercials;
    });
  }
  ngAfterViewInit(){
    this.mapService.plotMap();
  }
}


interface Commercial {
  id: number,
  company: string,
  credit: number,
  startDate: Date
}
