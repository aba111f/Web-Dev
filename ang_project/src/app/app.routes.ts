import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: '', redirectTo: 'home', component: HomeComponent},
    {path: '**', component: NotfoundComponent}
];
