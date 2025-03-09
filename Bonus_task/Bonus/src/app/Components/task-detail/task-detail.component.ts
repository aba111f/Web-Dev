import { Component, OnInit } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent extends BaseTaskComponent implements OnInit{
  taskId!: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService
              )
  {
    super();
  }

  ngOnInit(): void {
      const taskId = Number(this.route.snapshot.paramMap.get('id'));
      const task = this.taskService.getTaskById(taskId);
      if(task){
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.category = task.category;
        this.status = task.status;
        this.deadline = task.deadline;
      }
    }

    goBack(){
      this.router.navigate([
        '/tasks'
      ]);
    } 
}
