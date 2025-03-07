import { Component, EventEmitter, Input, Output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  /*taskTitleInput = signal('');
  taskSummaryInput = signal('');
  taskDateInput = signal('');
  same as:
  */
  taskTitleInput = '';
  taskSummaryInput = '';
  taskDateInput = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.taskTitleInput,
      summary: this.taskSummaryInput,
      date: this.taskDateInput
    }, this.userId);

    this.close.emit();
  }

}