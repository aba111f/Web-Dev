import { Component } from '@angular/core';
import { RouterOutlet, Route, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {NotfoundComponent } from './notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, NotfoundComponent, CommonModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'ang_project';
  forParent: string = 'this is Parent';
  forChild: string = 'this is Child';

  
}

