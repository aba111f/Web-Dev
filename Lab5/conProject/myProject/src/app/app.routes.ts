import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-item/:cId/:categoryName', component: ProductItemComponent }
    
];
