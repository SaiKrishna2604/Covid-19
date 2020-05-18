import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  news:any;
  ngOnInit() {
    this.httpService.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=4dbc17e007ab436fb66416009dfb59a8").subscribe(
      data =>{
        this.news=data["articles"];
        console.log(this.news);
        
      }
    )
  }

}
