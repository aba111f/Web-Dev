import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  
  constructor(private taskService: TaskService){

  } 
  tasks = this.taskService.getTasks(); 
  onTaskCompleted(taskId: number){
    this.taskService.markTaskAsCompleted(taskId);
  }
}
