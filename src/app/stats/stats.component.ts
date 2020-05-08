import { StatserviceService } from './../statservice.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: Object;
  constructor(private data: StatserviceService) { }

  ngOnInit() {

    this.data.getdata().subscribe(
      
      data => this.stats=data
    );
    
  }
  
}
