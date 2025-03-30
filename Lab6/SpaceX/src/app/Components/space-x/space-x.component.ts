import { Component, OnInit, OnDestroy } from '@angular/core';
import { spaceXService } from '../../space-x.service';
import { Launch } from '../../Interfaces/Launch';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-space-x',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './space-x.component.html',
  styleUrl: './space-x.component.css'
})
export class SpaceXComponent implements OnInit{
  launches: any = [];



  constructor(
              private http: HttpClient 
  ){
    
   }

   ngOnInit(): void {
       this.http.get("https://api.spacexdata.com/v3/launches").subscribe((data: any) => {
        this.launches = data;
        // console.log(this.launches);
       });
       
       this.filterBystatus();
   }
   


   
   filterBystatus(){
    this.launches.filter((data: { launch_success: boolean; }) => {
      data.launch_success = true;
    }
    );
   }  
}
