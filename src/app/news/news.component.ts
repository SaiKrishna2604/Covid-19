import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'Chart.js';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  constructor(private httpService: HttpClient) { }
  arrnews :String[];

  global: any;
  ngOnInit() {
    this.httpService.get("https://api.covid19api.com/summary").subscribe
    (
      data =>{
        this.global = data["Global"];
       this.arrnews=data["Countries"] as string[];
       console.log(this.global)

      }
    );
  }

}
