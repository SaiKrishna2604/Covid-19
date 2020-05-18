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
    this.httpService.get("https://api.covid19api.com/summary").subscribe
    (
      data =>{
        this.global = data["Global"];
       this.arrnews=data["Countries"] as string[];
       console.log(this.arrnews);

      }
    );
  }

}
