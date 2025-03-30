import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from './Interfaces/Launch';


@Injectable({
  providedIn: 'root'
})
export class spaceXService {
  
  private spaceXURL = 'https://api.spacexdata.com/v3/launches';

  

  constructor(private http: HttpClient) { 

  }

  getLaunches(): Observable<any[]> {
    return this.http.get<any[]>(this.spaceXURL);
  }


}
