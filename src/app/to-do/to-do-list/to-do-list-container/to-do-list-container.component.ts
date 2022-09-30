import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../../../Shared/Modals/Task.model';
import { TaskList } from '../../../Shared/Modals/TaskList.model';
import { ToDoService } from 'src/app/Shared/Services/to-do.service';
import { TaskDate } from 'src/app/Shared/Modals/TaskDate.model';

@Component({
  selector: 'app-to-do-list-container',
  templateUrl: './to-do-list-container.component.html',
  styleUrls: ['./to-do-list-container.component.css']
})
export class ToDoListContainerComponent implements OnInit {
  @Input()
  Day:TaskDate = 1;
  TasksList:TaskList = new TaskList();
  constructor(private NewTask: ToDoService) { }
  Tasks:any = this.TasksList.getTasksByDate(this.Day);
  ngOnInit(): void {
    this.NewTask.NewTask.subscribe((request: TaskList)=> {
      this.TasksList = request;
      this.Tasks = this.TasksList.getTasksByDate(this.Day);

    })
    this.NewTask.TaskDate.subscribe((request: TaskDate)=> {
      this.Day = request;
      this.Tasks = this.TasksList.getTasksByDate(this.Day);
    })
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
