import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Company, Vacancy } from './Intefaces/inter';
import { ServService } from './Services/serv.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh-front';
  company!: Company[];
  vacancy!: Vacancy[];
  loaded: boolean = false;
  constructor(private service: ServService){
  }


  loadCompanies(){
    this.service.getCompanies().subscribe(data => {
      this.company = data;
      this.loaded = true;
    }
    );
    // this.loaded = true;
    
  }

  goVacancy(id: number){
    this.service.getVacByComp(id).subscribe(data => {
      this.vacancy = data;
    });
  }

}
