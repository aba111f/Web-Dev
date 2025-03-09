// src/app/services/task.service.ts
import { Injectable } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  deadline: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Work on project', description: 'Finish Angular project', category: 'Work', status: 'Pending', deadline: new Date('2025-03-15') },
    { id: 2, title: 'Study TypeScript', description: 'Learn advanced TypeScript', category: 'Study', status: 'Pending', deadline: new Date('2025-03-20') }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  markTaskAsCompleted(id: number) {
    const task = this.getTaskById(id);
    if (task) {
      task.status = 'Completed';
    }
  }
}
