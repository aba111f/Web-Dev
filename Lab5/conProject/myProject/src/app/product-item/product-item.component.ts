import { Component, OnInit  } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';
import { Product, Category } from '../categories/Product/Product';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  cId: number | null = null;
  categoryName: string | null = null;
  constructor(private route: ActivatedRoute){

    this.category = [
      {
        cId: 1,
        items: this.clothe
      },
      {
        cId: 2,
        items: this.laptop
      },
      {
        cId: 3,
        items: this.phone
      },
      {
        cId: 4,
        items: this.sneakers
      }
    ];

    this.route.paramMap.subscribe(params => {
      this.cId = Number(params.get('cId'));
      this.categoryName = params.get('categoryName');
      this.filterCategory();
    });
    

    

    
  }
  




  selectedCategory: Category | null = null;
  


  filterCategory() {
    this.selectedCategory = this.category.find(cat => cat.cId === this.cId) || null;
  }





  phone: Product[] = [
    
    {
      pId: 1,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'Флагманский смартфон Apple с камерой 48 МП и процессором A17 Pro.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-dual-sim-chernyi-113587997/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/hfe/84075933073438.jpg?format=preview-large'
    },
    {
      pId: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      description: 'Смартфон с S-Pen, камерой 200 МП и экраном 120 Гц.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=preview-large'
    },
    {
      pId: 3,
      name: 'Google Pixel 8 Pro 256GB',
      description: 'Смартфон от Google с камерой на базе ИИ и чистым Android.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-256-gb-chernyi-107066123/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/hb5/84424699838494.png?format=preview-large'
    },
    {
      pId: 4,
      name: 'Xiaomi 13 Pro 512GB',
      description: 'Флагман Xiaomi с камерой Leica и мощным процессором.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-4g-8-gb-256-gb-chernyi-116797774/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/hba/85227322015774.jpg?format=preview-large'
    },
    {
      pId: 5,
      name: 'OnePlus 11 256GB',
      description: 'Быстрый смартфон с дисплеем 120 Гц и зарядкой 100 Вт.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/oneplus-9-pro-8-256gb-zelenyi-101396067/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/hb1/63996351578142.jpg?format=preview-large'
    }
      
      
    ];
    


    clothe: Product[] = [
      
      
    {
      pId: 1,
      name: 'Nike Air Hoodie',
      description: 'Стильная толстовка с логотипом Nike.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/tolstovka-nike-m-nsw-nike-air-ft-hoodie-dv9777-010-chernyi-m-114744533/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h4f/84538274119710.jpg?format=gallery-medium'
    },
    {
      pId: 2,
      name: 'Adidas Originals T-Shirt',
      description: 'Фирменная футболка Adidas из 100% хлопка.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/futbolka-larko-tshirt-xxl-xxxl-110220201/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/pba/9289856.jpg?format=gallery-medium'
    },
    {
      pId: 3,
      name: 'Puma Sports Jacket',
      description: 'Легкая спортивная куртка для занятий спортом.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/zimnjaja-kurtka-tuba-jacket-guardia-9043-chernyi-xl-123266301/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/pe1/3272832.jpg?format=gallery-medium'
    },
    {
      pId: 4,
      name: 'Levi’s 501 Jeans',
      description: 'Классические джинсы Levi’s 501 из денима.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dzhinsy-prjamye-levis-12501-0554-sinii-w30-l32-129032193/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/p10/5054132.jpeg?format=gallery-medium'
    },
    {
      pId: 5,
      name: 'North Face Winter Jacket',
      description: 'Теплая зимняя куртка от The North Face.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/vetrovka-the-north-face-antora-jacket-nf0a7qey-sinii-m-131098947/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/p43/12063145.jpeg?format=gallery-medium'
    }
    ];

    

    laptop: Product[] = [
      
    {
      pId: 1,
      name: 'Apple MacBook Pro 16 M3 Pro 512GB',
      description: 'Мощный ноутбук с чипом M3 Pro и Retina дисплеем.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-36-gb-ssd-1024-gb-macos-mrw73-114862792/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/hfe/84577424310302.jpg?format=gallery-medium'
    },
    {
      pId: 2,
      name: 'ASUS ROG Strix G16',
      description: 'Игровой ноутбук с видеокартой RTX 4070 и экраном 165 Гц.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-32-gb-ssd-1000-gb-dos-g614ji-n4181-90nr0d41-m00v20-118060952/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h28/85628076032030.png?format=gallery-medium'
    },
    {
      pId: 3,
      name: 'Lenovo Legion 5 Pro',
      description: 'Игровой ноутбук с процессором Ryzen 7 и видеокартой RTX 3060.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-16-32-gb-ssd-1000-gb-win-11-pro-16irx9-83dg006wrk-119270896/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/hb0/85987722395678.jpg?format=gallery-medium'
    },
    {
      pId: 4,
      name: 'HP Spectre x360 14',
      description: 'Премиальный ноутбук-трансформер с сенсорным OLED-дисплеем.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-16-gb-ssd-1000-gb-win-11-14-eu0003ci-a19gjea-118723256/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/85832389918750.png?format=gallery-medium'
    },
    {
      pId: 5,
      name: 'Dell XPS 15',
      description: 'Тонкий и мощный ноутбук с дисплеем 4K и процессором Intel i9.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9500-15-6-16-gb-ssd-512-gb-win-11-pro-p91f001-135093177/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paf/p90/26151125.jpg?format=gallery-medium'
    }
      
      
      
    ];
    
    sneakers: Product[] = [
     
    {
      pId: 1,
      name: 'Nike Air Force 1',
      description: 'Культовые белые кроссовки от Nike.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kedy-nike-air-force-1-07-fj4146-001-chernyi-45-133307549/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p95/pa5/19659707.jpg?format=gallery-medium'
    },
    {
      pId: 2,
      name: 'Adidas Yeezy Boost 350 V2',
      description: 'Легендарные Yeezy от Adidas с комфортной амортизацией.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/krossovki-adidas-alphaboost-v2-ie9151-zelenyi-36-5-123266930/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h97/87053840744478.jpg?format=gallery-medium'
    },
    {
      pId: 3,
      name: 'New Balance 550',
      description: 'Кроссовки в стиле ретро с кожаным верхом.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/krossovki-new-balance-550-white-juniper-bbw550bg-belyi-36-114081890/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hf4/84351434489886.jpg?format=gallery-medium'
    },
    {
      pId: 4,
      name: 'Puma RS-X',
      description: 'Современные беговые кроссовки с технологией RS.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/krossovki-puma-39077644-bezhevyi-42-133585663/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/p5d/20789281.jpg?format=gallery-medium'
    },
    {
      pId: 5,
      name: 'ASICS Gel-Kayano 29',
      description: 'Профессиональные беговые кроссовки с гелевой амортизацией.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/asics-gel-kayano-29-1021b272-700-rozovyi-36-5-117174041/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/h2a/85350008389662.jpg?format=gallery-medium'
    }
    ];


    category!: Category[];


    
}
