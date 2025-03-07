import { Injectable } from '@angular/core';
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks = [
        {
          id: 't1',
          userId: 'u2',
          title: 'Plan how to conquer the World',
          summary: 'Help Momonga-sama conquer the world',
          dueDate: '2050-12-31'
        },
        {
          id: 't2',
          userId: 'u6',
          title: 'Protect the King',
          summary: 'Do not let the king be killed',
          dueDate: '2050-12-31'
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Train the Pleiades',
          summary: 'Make sure they are ready for battle',
          dueDate: '2050-12-31'
        },
        {
          id: 't4',
          userId: 'u5',
          title: 'Feed the pets',
          summary: 'Feed my pets',
          dueDate: '2050-12-31'
        },
        {
          id: 't5',
          userId: 'u1',
          title: 'Conquer the World',
          summary: 'Rule the world',
          dueDate: '2050-12-31'
        },
        {
          id: 't6',
          userId: 'u4',
          title: 'Hide Nazarick',
          summary: 'Cover the walls of the great tomb in mud and plants',
          dueDate: '2050-12-31'
        }
      ];

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    
    getUserTasks(userId: string) {
        return this.tasks.filter((t) => t.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
        this.saveTasks();
    }

    deleteTask(taskId: string) {
        this.tasks = this.tasks.filter((t) => t.id !== taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}