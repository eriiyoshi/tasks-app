import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  //@Input() name?: string;  //same as:
  @Input({required: true}) name: string | undefined;
  @Input({required: true}) userId!: string;

  openNewTask = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTaskButton() {
    this.openNewTask = true;
  }

  onCloseAddTask() {
    this.openNewTask = false;
  }

}
