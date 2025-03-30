import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaceXComponent } from './Components/space-x/space-x.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpaceXComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpaceX';
}
