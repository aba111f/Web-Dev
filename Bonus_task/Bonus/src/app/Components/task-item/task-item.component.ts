import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { TaskService } from '../../task.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent extends BaseTaskComponent{
  // @Input() getData = BaseTaskComponent;
  @Output() taskCompleted = new EventEmitter<void>();
  
  
 

  markAsCompleted(){
    this.status = 'Completed';
    this.taskCompleted.emit();
  }
}
