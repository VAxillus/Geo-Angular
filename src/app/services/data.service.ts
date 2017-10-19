import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
 headers: Headers;

  constructor(public http:Http) {
    console.log("data service connected");
     let headers = new Headers({ "content-type": "application/json", });
  }

  getCommercials(){
    return this.http.get('http://localhost:4200/api/Commercial/getAll').map(res => res.json());
  }



  addCommercial(company, credit, startDate){
    let body = {company: company, credit: credit, startDate: startDate};
    console.log(body);
    return this.http.post('http://localhost:8000/api/Commercial/submitCommercial', body, { headers: this.headers }).map(res => res.json());
  }
}
