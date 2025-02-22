import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  
  

  
  cId: number | null = null;
  
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.cId = Number(params.get('cId'));
    });
  }

  
}
