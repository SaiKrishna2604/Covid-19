import { HttpClient } from '@angular/common/http';
import { StatserviceService } from './../statservice.service';
import { Component, OnInit ,ViewChild,Input} from '@angular/core';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import * as $ from 'jquery';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Directive } from '@angular/core';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
  
  
})
export class StatsComponent implements OnInit{
  
  
  global: any;
  country:any;
  stats: any;
  zones: any;
  displayedColumns: string[] = ['state', 'district', 'zone', 'lastupdated'];

  constructor(private data: StatserviceService, private httpService: HttpClient) { 
    
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.zones.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {

    this.data.getdata().subscribe(
      
      data => {
        this.stats = data['zones']
        this.zones = new MatTableDataSource(this.stats)
        this.zones.paginator = this.paginator;

        console.log(this.zones)
        
      }

      
    
    );

    this.httpService.get("https://api.covid19api.com/summary").subscribe
    (
      data =>{
        this.global = data["Countries"];
      //  console.log(this.global)

      }
    );
      
    

  }
//   mouseEnter(){
//     this.httpService.get("https://api.covid19api.com/summary").subscribe
//     (
//       data =>{
//         this.global = data["Global"];
//       console.log(this.global)

//       }
//     );
//  }

//  mouseLeave(div : string){
//   // console.log('mouse leave :' + div);
//  }
  
}
