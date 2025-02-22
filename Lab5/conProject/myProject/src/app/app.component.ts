import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Categories } from './categories/Category';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: Categories[] = [
    {
      cId: 1,
      categoryName: "Clothe"
    },
    {
      cId: 2,
      categoryName: "Laptops"
    },
    {
      cId: 3,
      categoryName: "Phones"
    },
    {
      cId: 4,
      categoryName: "Sneakers"
    }
  ];
  isProductsPage = false;
  
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isProductsPage = event.url === '/products';
      }
    });
  }

  
  goItem(cId: number) {
    this.router.navigate(['/products-list', cId]);
  }
  
}
