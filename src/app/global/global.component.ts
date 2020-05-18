import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-news',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  
  constructor(private httpService: HttpClient) { }
  arrnews :String[];

  global: any;
  ngOnInit() {
    this.httpService.get("https://api.coronatracker.com/v3/stats/worldometer/global").subscribe
    (
      data =>{
        this.global = data;
       this.arrnews=data["Countries"] as string[];
       console.log(this.arrnews);

      }
    );
    this.httpService.get("http://api.coronatracker.com/v2/analytics/country").subscribe(
      data =>{
        this.global = data;
      }
    )
  }

}
