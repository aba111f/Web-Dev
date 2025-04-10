import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from '../Intefaces/inter';
@Injectable({
  providedIn: 'root'
})
export class ServService {
  readonly url = "http://127.0.0.1:8000/";
  constructor(private http: HttpClient) { }

  getCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(this.url + "api/companies/");
  }

  getVacByComp(id: number):Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(this.url + "api/companies/" + id + "/vacancies/");
  }

  
}
