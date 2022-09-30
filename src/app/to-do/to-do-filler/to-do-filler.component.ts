import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Shared/Modals/Task.model';
import { TaskList } from '../../Shared/Modals/TaskList.model';

@Component({
  selector: 'app-to-do-filler',
  templateUrl: './to-do-filler.component.html',
  styleUrls: ['./to-do-filler.component.css']
})
export class ToDoFillerComponent implements OnInit {
  @Output() AddTask: EventEmitter<Task> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  Task:Task = new Task;
  AddNewTask(){
    this.AddTask.emit(this.Task);
    this.Task = new Task;
  }
}
