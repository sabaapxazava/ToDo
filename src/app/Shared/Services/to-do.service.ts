import { EventEmitter, Injectable } from '@angular/core';
import { TaskDate } from '../Modals/TaskDate.model';
import { TaskList } from '../Modals/TaskList.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public NewTask:EventEmitter<TaskList> = new EventEmitter();
  public TaskDate:EventEmitter<TaskDate> = new EventEmitter();
  constructor() { }
}
