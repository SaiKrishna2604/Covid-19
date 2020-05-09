import { StatserviceService } from './../statservice.service';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  

  stats: any;
  zones: any;
  displayedColumns: string[] = ['state', 'district', 'zone', 'lastupdated'];

  constructor(private data: StatserviceService) { }

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
    
  }
  
}
