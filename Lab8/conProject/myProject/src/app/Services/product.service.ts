import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../categories/Product/Product';
import { Categories } from '../categories/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly APIUrl = "http://127.0.0.1:8000/api/";
  constructor(private http : HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl + "products/");
  } 
  getProduct(id: number):Observable<Product>{
    return this.http.get<Product>(this.APIUrl + "products/" + id +'/');
  }

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(this.APIUrl + "categories/");
  } 
  getCategory(id: number):Observable<Categories>{
    return this.http.get<Categories>(this.APIUrl + "categories/" + id + "/");
  }

  getProductByCategory(id: number):Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl + "categories/" + id + "/products/");
  }
  
}
