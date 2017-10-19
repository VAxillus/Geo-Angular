import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private mapService: MapService, private dataService: DataService) { }

  ngOnInit() {
  }


  addCommercial(company, credit, startDate){
    var parsedDate = Date.parse(startDate);
    if (isNaN(startDate) && !isNaN(parsedDate) && (credit > 0)) {
      this.dataService.addCommercial(company, credit, startDate).subscribe(
        res => {
            console.log(res);
          },
          err => {
            console.log("Error occured");
          }
        );
    }
  }

  ngAfterViewInit(){
    this.mapService.plotMap();
  }

}
