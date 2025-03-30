import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Categories } from './categories/Category';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from './Services/product.service';
import { Product } from './categories/Product/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  Pid!: number;
  Cid!: number;

  products!: Product[];
  product!: Product;
  categories!: Categories[];
  category!: Categories;
  activeBtn1: boolean = false;
  activeBtn2: boolean = false;
  activeBtn3: boolean = false;
  activeBtn4: boolean = false;
  activeBtn5: boolean = false;

  constructor(private pservice: ProductService){
  
  }

  // ngOnInit(): void {
  //   // this.getProducts();
  // }


  getProducts(){
    this.pservice.getProducts().subscribe(data => {
      console.log("Received products:", data);
      this.products = data;
    }
    );
    this.activeBtn1 = true;
    this.activeBtn2 = false;
    this.activeBtn3 = false;
    this.activeBtn4 = false;
    this.activeBtn5 = false;
  }

  getProductById(id: number){
    this.pservice.getProduct(id).subscribe(data => {
      this.product = data;
    }
    );
    this.activeBtn1 = false;
    this.activeBtn2 = true;
    this.activeBtn3 = false;
    this.activeBtn4 = false;
    this.activeBtn5 = false;
  }
  getCategories(){
    this.pservice.getCategories().subscribe(data => {
      this.categories = data;
    });
    this.activeBtn1 = false;
    this.activeBtn2 = false;
    this.activeBtn3 = true;
    this.activeBtn4 = false;
    this.activeBtn5 = false;
  }
  getCategoryById(id: number){
    this.pservice.getCategory(id).subscribe(data => {
      this.category = data;
    });
    this.activeBtn1 = false;
    this.activeBtn2 = false;
    this.activeBtn3 = false;
    this.activeBtn4 = true;
    this.activeBtn5 = false;
  }
  getProductsByCategory(id: number){
    this.pservice.getProductByCategory(id).subscribe(data => {
      this.products = data;
    });
    this.activeBtn1 = false;
    this.activeBtn2 = false;
    this.activeBtn3 = false;
    this.activeBtn4 = false;
    this.activeBtn5 = true;
  }
}
