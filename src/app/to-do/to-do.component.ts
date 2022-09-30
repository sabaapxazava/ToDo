import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../Shared/Modals/Task.model';
import { TaskDate } from '../Shared/Modals/TaskDate.model';
import { TaskList } from '../Shared/Modals/TaskList.model';
import { ToDoService } from '../Shared/Services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  @Output()
  TasksList:TaskList = new TaskList;
  constructor(private NewTask: ToDoService) { }

  ngOnInit(): void {
  }


  OnNewTaskAdd(event:Task){
    var NewTask:Task = event;
    NewTask.TaskDate = event.TaskDate
    this.TasksList.AddNewTask(NewTask);
    this.NewTask.NewTask.emit(this.TasksList);
  }
}
