import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatserviceService {

  private _url: string="https://api.covid19india.org/zones.json";
  constructor(private http: HttpClient){}

  getdata(){
    return this.http.get(this._url);
 }
}
