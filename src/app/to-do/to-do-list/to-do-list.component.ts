import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TaskList } from '../../Shared/Modals/TaskList.model';
import { TaskDate } from '../../Shared/Modals/TaskDate.model';
import { ToDoService } from 'src/app/Shared/Services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input()
  TasksList:TaskList = new TaskList();
  @Output()
  Day!:TaskDate;

  constructor(private TaskDate: ToDoService) { }

  ngOnInit(): void {
  }
  tabChanged(Event: MatTabChangeEvent){
    this.TaskDate.TaskDate.emit(Event.index + 1)
  }
}
