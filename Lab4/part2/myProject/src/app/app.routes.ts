import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'header', component: HeaderComponent }
];
