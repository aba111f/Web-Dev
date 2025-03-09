import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-task',
  standalone: true,
  imports: [],
  templateUrl: './base-task.component.html',
  styleUrl: './base-task.component.css'
})
export class BaseTaskComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() category!: string;
  @Input() status!: string;
  @Input() deadline!: Date;
}
