import { Routes } from '@angular/router';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { TaskDetailComponent } from './Components/task-detail/task-detail.component';

export const routes: Routes = [
    {path: 'tasks', component: TaskListComponent},
    { path: 'task/:id', component: TaskDetailComponent},
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];
